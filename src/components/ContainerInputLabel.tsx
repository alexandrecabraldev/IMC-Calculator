import styled from "styled-components";

interface PropsContainerInputLabel{
    title:string;
}

export function ContainerInputLabel(props:PropsContainerInputLabel){
    return(
        <ContainerBoxInput>
            <label htmlFor="weightInput">{props.title}</label>
            <input type="number" id="weightInput"/>
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


    