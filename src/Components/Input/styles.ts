import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 93%;
    margin: 4px;
    display: flex;
    align-items: center;
    border: 1px solid #DBDBDB;
`;

export const InputMain = styled.input`
    width: 100%;
    padding: 9px;
    border: none;
    margin: auto;
`;

export const Label = styled.label`
    position: absolute;
    margin-top: -35px;
    margin-left: 5px;
    background: white;
    padding: 4px;
    font-size: 11px;
`

export const ErroMessage = styled.p`
    font-size: 9px;
    color: red;
    margin: 1px;
    text-align: center;
`;