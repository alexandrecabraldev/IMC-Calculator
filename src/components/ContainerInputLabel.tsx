import { ChangeEvent } from "react";
import styled from "styled-components";
import { useState,useContext } from "react";
import { ContextApp } from "../context/ContextApp";

interface PropsContainerInputLabel{
    title:string;
    labelText:string;
    onHandleInputContainerApp:Function;
}

export function ContainerInputLabel(props:PropsContainerInputLabel){

    let {validation,setValidation }=useContext(ContextApp);
    const [valueInput, setValueInput]= useState("");
    
    let resultInput;

    // 
    function reset(){

        if(validation){
            setValueInput("");
            console.log("reset");
        }
 }

    
    function handleInput(event:ChangeEvent<HTMLInputElement>){
        resultInput = event.target.value;
        setValueInput(resultInput);

        props.onHandleInputContainerApp(resultInput);
        //reset();
    }   
 

    return(
        <ContainerBoxInput>
            <label htmlFor={props.labelText}>{props.title}</label>
            <input type="number" id={props.labelText} onChange={handleInput} value={valueInput}/>
        </ContainerBoxInput>
    );
}



const ContainerBoxInput = styled.div`

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    input{
        padding: 1rem;
        border-radius: 4px;
        border: 1px solid ${props=>props.theme.borderInput};
        
        :focus{
            outline: 1px solid ${props=>props.theme.buttonBackground};
        }

        &::-webkit-inner-spin-button, ::-webkit-outer-spin-button{
            -webkit-appearance: none;
        }
    }
`;


    