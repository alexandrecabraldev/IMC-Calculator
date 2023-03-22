import styled, {keyframes} from "styled-components";

const SlideDown = keyframes`
    0%{
        transform: translateY(-100%);
    }

    100%{
        transform: translateY(0);
    }
`;

export const Alert = styled.div`
    animation: ${SlideDown} 0.5s;

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

