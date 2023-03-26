import styled from "styled-components";
import {X} from "phosphor-react"
import { useContext } from "react";
import { ContextApp } from "../context/ContextApp";


interface PropsResult{
    imc:number;
}




export function Result(props:PropsResult){
    let{ setValidation } = useContext(ContextApp);

    function closeScreen(){
        setValidation(false)
    }
    

    return(
        <BackgroundBlack>
            <ResultIMC>

                {`Seu IMC é de ${props.imc}`}
                <ContainerButtonClose onClick={closeScreen}>
                    <X size={16}/>
                </ContainerButtonClose>
                
            </ResultIMC>
        </BackgroundBlack>
    );
}

const ResultIMC = styled.div`
    position: relative;
    padding: 2rem 3rem 3rem;
    max-width: 23rem;
    background-color: ${props=>props.theme.white};
    border-radius: 8px;

    opacity: 1;
    font-weight: 700;
    font-size: 2rem;
`;

const ContainerButtonClose = styled.div`
    position: absolute;
    top:1rem;
    right: 1rem;
    line-height: 0;
    cursor: pointer;
`;

const BackgroundBlack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: ${props=>props.theme.backgroundResult}
   
`;