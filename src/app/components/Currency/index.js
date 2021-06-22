import React, {useState} from 'react';
import styled from "styled-components";
import {nanoid} from "nanoid";
import {useSelector} from "react-redux";
import {useActions} from "../../redux/store/actionCreators";


const CurrencyFilter = () => {
    
    // const {currency} = useSelector(state => state.currency)
    const {changeCurrency} = useActions()
    const [currentCurrency, setCurrentCurrency] = useState('3')
    
    const handleCheck = async (e) => {
        await setCurrentCurrency(e.target.value)
        changeCurrency(e.target.id)
    }

    const radios = [
        {
            name: 'RUB',
            value: '1'
        },
        {
            name: 'USD',
            value: '2'
        },
        {
            name: 'EUR',
            value: '3'
        }
    ]


    return (
        <CurrencyWrapper>
            <h4>Валюта</h4>
            <RadioWrapper>
                {radios.map((radio, id) =>
                    <RadioGroup key={nanoid()}>
                        <RadioButton
                            id={radio.name}
                            type="radio"
                            name="currentCurrency"
                            value={radio.value}
                            onChange={handleCheck}
                            checked={currentCurrency === radio.value}
                        >
                        </RadioButton>
                        <label htmlFor={radio.name}>{radio.name}</label>
                    </RadioGroup>
                )

                }
            </RadioWrapper>
        </CurrencyWrapper>
    );
};

const CurrencyWrapper = styled.div`

  padding: 10px;

  h4 {
  padding-bottom: 10px;
  
}
`
const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
`
const RadioButton = styled.input`
    padding: 5px 10px;
    display: none;
`

const RadioGroup = styled.div`
    padding: 10px 0px;
    cursor: pointer;

&:first-of-type label{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px ;
  }
  
  &:last-of-type label{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px ;
  }

label {
  padding: 10px 20px;
  color: #2196F3;
  cursor: pointer;
  font-weight: bold;
}

input[type="radio"]+label:hover {
 background-color: #F2FCFF;
  box-shadow:0px 0px 0px 1px #2196F3 inset;
}

input[type="radio"]:checked+label {
  background-color: #2196F3;
  color: white;
}
  
`

export default CurrencyFilter;
