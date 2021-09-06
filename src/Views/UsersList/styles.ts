import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    flex-direction: column;

    @media(max-width: 800px) {
        width: 100%;
    }
`;

export const ContainerCardDataBase = styled.div`
    width: 50%;
    max-height: 20vh;
    overflow-y: scroll;
    background: white;

    @media(max-width: 800px) {
        width: 90%;
    }
`;

export const ContainerCardForm = styled.div`
    margin-top: 10px;
    width: 50%;
    background: white;

    @media(max-width: 800px) {
        width: 90%;
    }
`;

export const Table = styled.table`
    width: 100%;
`;

export const THead = styled.thead`
    width: 100%;
`;

export const TBody = styled.tbody`
    width: 100%;
`;

export const TR = styled.tr`
    text-align: left;
`;

export const TH = styled.th`
    text-align: left;
    min-width: 100px;
`;

export const TD = styled.td`
    text-align: left;
`;

export const Label = styled.label`
    display: block;
    padding: 20px;
`;

export const ContainerForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ContainerFormInline = styled.div`
    width: 97%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 2.5%;
`;

export const SubContainerFormInline = styled.div`
    
`;

export const IconButton = styled.button`
    border: none;
    padding: 1px;
    background: none;
    margin-right: 10px;
`;
