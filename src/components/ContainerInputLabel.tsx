import { ChangeEvent } from "react";
import styled from "styled-components";

interface PropsContainerInputLabel{
    title:string;
    labelText:string;
    onHandleInputContainerApp:Function;
}

export function ContainerInputLabel(props:PropsContainerInputLabel){
    
    let resultInput;

    function handleInput(event:ChangeEvent<HTMLInputElement>){
        resultInput = event.target.value;
        props.onHandleInputContainerApp(resultInput);
    }   
 
    return(
        <ContainerBoxInput>
            <label htmlFor={props.labelText}>{props.title}</label>
            <input type="number" id={props.labelText} onChange={handleInput}/>
        </ContainerBoxInput>
    );
}

const ContainerBoxInput = styled.form`

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


    