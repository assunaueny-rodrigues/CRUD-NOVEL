import React from 'react';
import { 
    ContainerMain,
    ContainerLeft,
    ContainerRight,
    Label,
    Avatar
} from './styles';
import UserIcon from '../../Assets/Icons/avatar.png'

const Header = () => {
    return(
        <ContainerMain>
            <ContainerLeft>
                <Label style={{ fontSize: '1rem', fontWeight: 'bold' }} >Novel Consultoria</Label>
                <Label style={{ fontSize: '0.8rem' }}>Test React</Label>    
            </ContainerLeft>
            <ContainerRight>
                <div>
                    <Label style={{ fontSize: '1rem', fontWeight: 'bold' }} >João da Silva</Label>
                    <Label style={{ fontSize: '0.8rem' }}>ADMINISTRADOR</Label>
                </div>
                <Avatar src={UserIcon} />
            </ContainerRight>
        </ContainerMain>
    )
}

export default Header;