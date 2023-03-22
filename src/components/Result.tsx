import styled from "styled-components";


interface PropsResult{
    imc:number;
}

export function Result(props:PropsResult){
    return(
        <BackgroundBlack>
            <ResultIMC>{`Seu IMC é de ${props.imc}`}</ResultIMC>
        </BackgroundBlack>
    );
}

const ResultIMC = styled.div`
    //position: absolute;
    padding: 2rem 3rem 3rem;
    max-width: 23rem;
    background-color: ${props=>props.theme.white};
    border-radius: 8px;

    opacity: 1;
    font-weight: 700;
    font-size: 2rem;
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