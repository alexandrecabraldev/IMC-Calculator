import styled from "styled-components";

interface PropsInterface{
    children:string;
}

export function Title({children}:PropsInterface){
    return(
        <TitleApp>{children}</TitleApp>
    );
}

const TitleApp = styled.h1`

`;