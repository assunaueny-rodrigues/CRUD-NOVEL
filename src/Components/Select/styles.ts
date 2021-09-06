import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 93%;
    margin: 4px;
    display: flex;
    align-items: center;
    border: 1px solid #DBDBDB;
`;

export const SelectMain = styled.select`
    width: 100%;
    padding: 8px;
    border: none;
    margin: auto;
`;

export const Label = styled.label`
    position: absolute;
    margin-top: -35px;
    margin-left: 5px;
    background: white;
    padding: 0px 4px;
    font-size: 11px;
`

export const ErroMessage = styled.p`
    font-size: 9px;
    color: red;
    margin: 1px;
    text-align: center;
`;