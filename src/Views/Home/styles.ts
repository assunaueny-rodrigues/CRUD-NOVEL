import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
`;

export const ContainerCard = styled.div`
    width: 50%;
    @media(max-width: 800px) {
        width: 90%;
    }
`;

export const ButtonIcon = styled.button`
    padding: 3px;
    background: transparent;
    border: none;
`;

export const LabelButtonIcon = styled.label`
    
`;

export const ContainerData = styled.div`
    width: 98%;
    margin: auto;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;


export const ContainerDataLeft = styled.div`
    flex: 70%;
    padding-left: 5px;
`;

export const ContainerDataRight = styled.div`
    flex: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.label`
    display: block;
`;

export const ContainerButton = styled.div`
    width: 99%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 3px;
`;