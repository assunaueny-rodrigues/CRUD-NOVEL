import React, { useEffect } from 'react';
import Card from '../../Components/Card';
import { 
    ContainerMain,
    ContainerCard, 
    ButtonIcon,
    LabelButtonIcon,
    ContainerData,
    ContainerDataLeft,
    ContainerDataRight,
    Label,
    ContainerButton
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import colors from '../../GlobalStyles';
import Button from '../../Components/Button';
import { useHistory } from "react-router-dom";
import { useState } from 'react';

const Home = () => {
    let history = useHistory();

    const [ total, setTotal ] = useState(0)

    useEffect(() => {
        let data = localStorage.getItem("database")
        if(data !== null){
            let array = JSON.parse(data)
            setTotal(array.length)
        }
    })

    const refresh = () => {
        let data = localStorage.getItem("database")
        if(data !== null){
            let array = JSON.parse(data)
            setTotal(array.length)
        }
    }

    return(
        <ContainerMain>
            <ContainerCard>
                <Card>
                    <ButtonIcon>
                        <LabelButtonIcon onClick={() => refresh()}><FontAwesomeIcon icon={ faSyncAlt } /> Contador Usuários</LabelButtonIcon>
                    </ButtonIcon>
                    <ContainerData style={{ background: colors.blueSecondary }}>
                        <ContainerDataLeft>
                            <h1> <FontAwesomeIcon icon={ faUsers } /> USUÁRIOS</h1>
                        </ContainerDataLeft>
                        <ContainerDataRight>
                            <Label style={{ fontSize: 20 }}>Total</Label>
                            <Label style={{ fontSize: 20, fontWeight: 'bold' }}>{total}</Label>
                        </ContainerDataRight>
                    </ContainerData>
                    <ContainerButton>
                        <Button onClick={() => history.push("/lista-de-usuarios")} label="Lista de usuários" background={colors.buttonPrimary} labelColor={colors.white} />
                    </ContainerButton>
                </Card>
            </ContainerCard>
            
        </ContainerMain>
    )
}

export default Home;