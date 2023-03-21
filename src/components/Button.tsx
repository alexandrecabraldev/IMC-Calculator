import styled from "styled-components";

export const Button = styled.button`

    display: flex;
    gap: 0.5rem;
    justify-content: center;

    padding: 1rem;
    width: 100%;
    color: ${props=>props.theme.white};
    border: none;
    border-radius: 6px;
    background-color: ${props=>props.theme.buttonBackground};

    cursor: pointer;
    
    transition-duration: 0.2s;

    &:hover{
        opacity: 0.8; 

    }
`;