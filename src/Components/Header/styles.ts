import styled from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10vh;
    background-color: transparent;
    align-items: center;
`;

export const ContainerLeft = styled.div`
    flex: 50%;
    padding: 15px;
    align-items: center;
`;

export const ContainerRight = styled.div`
    flex: 50%;
    text-align: right;
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const Label = styled.label`
    display: block;
`;

export const Avatar = styled.img`
    width: 70px;
    height: 40px;
`;