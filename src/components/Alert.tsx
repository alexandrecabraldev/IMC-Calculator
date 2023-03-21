import styled from "styled-components";

export const Alert = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    z-index: 1;
    top: 0;
    max-height: 2.5rem;
    min-height: 2rem;
    width: 100%;

    background-color: ${props=>props.theme.alert};
    color: ${props=>props.theme.white};
`;