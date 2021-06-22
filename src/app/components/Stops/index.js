import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {nanoid} from "nanoid";
import {useActions} from "../../redux/store/actionCreators";


const StopsFilter = () => {
    const {updateFilters} = useActions()
    const [filters, setFilters] = useState([
        {
            name: 'Без пересадок',
            value: "0",
            isChecked: false
        },
        {
            name: '1 пересадка',
            value: 1,
            isChecked: false
        },
        {
            name: '2 пересадки',
            value: 2,
            isChecked: false
        },
        {
            name: '3 пересадки',
            value: 3,
            isChecked: false
        }
    ])
    const [allChecked, setAllChecked] = useState(false)

    useEffect(() => {
        const checkAll = filters.every(filter => filter.isChecked)
        setAllChecked(checkAll)
        updateFilters(filters)
    }, [filters])

    const handleChange = async (e) => {
        let itemName = e.target.name;
        let checked = e.target.checked;

        if (itemName === "checkAll") {
            setAllChecked(checked)
            setFilters(filters.map(filter => ({...filter, isChecked: checked})))
            return
        }

        setFilters(filters.map(filter => filter.name === itemName ? {...filter, isChecked: checked} : filter))

    };

    const handleClick = (e) => {
        const itemName = e.name;
        const onlyFilter = filters.map(filter => filter.name === itemName ? {...filter, isChecked: true} : {
            ...filter,
            isChecked: false
        })
        setFilters(onlyFilter)
    }


    return (
        <FilterWrapper>
            <h4>Количество пересадок</h4>
            <FilterGroup>
                <input
                    name="checkAll"
                    type="checkbox"
                    checked={allChecked}
                    onChange={handleChange}
                />
                <span></span>

                <label>Все</label>
            </FilterGroup>
            {filters.map(f =>
                <FilterGroup key={nanoid()}>
                    <input
                        type="checkbox"
                        name={f.name}
                        value={f.value}
                        checked={f.isChecked}
                        onChange={handleChange}
                    />
                    <span></span>
                    <label>{f.name}</label>
                    <button onClick={() => handleClick(f)}>Только</button>
                </FilterGroup>
            )}
        </FilterWrapper>
    )
}

export default StopsFilter;

const FilterWrapper = styled.div`
padding: 10px 0;

  h4 {
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
}
`

const FilterGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 10px 0;
  cursor: pointer;
  
  &:hover {
    background-color: #F2FCFF;
  }
  
  &:hover > button {
    opacity: 1;
  }
  
  /* Hide the browser's default checkbox */
  
& label {
  padding-left: 40px;
  font-size: 13px;
  
}
& input {
  position: absolute;
  opacity: 0;
  top: 10px;
  left: 10px;
  height: 20px;
  width: 20px;
  z-index: 10;
  cursor: pointer;

}

/* Create a custom checkbox */
 & span {
  position: absolute;
  top: 10px;
  left: 10px;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
}
  
 /* On mouse-over, add a grey background color */
&:hover input ~ span {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
& input:checked ~ span {
  background-color: #fff;
  border: 1px solid #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
span:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
& input:checked ~ span:after {
  display: block;
}

/* Style the checkmark/indicator */
& span:after {
  left: 5px;
  top: 3px;
  width: 5px;
  height: 6px;
  border: solid #2196F3;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transform: rotate(40deg);
} 
  
  button {
    color: #2196F3;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    flex-grow: 1;
    border: none;
    background-color: inherit;
    cursor: pointer;
    opacity: 0;
  }
  

`
