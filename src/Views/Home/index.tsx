import React from 'react';
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
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import colors from '../../GlobalStyles';
import Button from '../../Components/Button';
import { useHistory } from "react-router-dom";

const Home = () => {
    let history = useHistory();

    return(
        <ContainerMain>
            <ContainerCard>
                <Card>
                    <ButtonIcon>
                        <LabelButtonIcon><FontAwesomeIcon icon={ faSyncAlt } /> Contador Usuários</LabelButtonIcon>
                    </ButtonIcon>
                    <ContainerData style={{ background: colors.blueSecondary }}>
                        <ContainerDataLeft>
                            <h1>USUÁRIOS</h1>
                        </ContainerDataLeft>
                        <ContainerDataRight>
                            <Label>Total</Label>
                            <Label style={{ fontWeight: 'bold' }}>3</Label>
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