import React from 'react';
import colors from '../../GlobalStyles';
import { ContainerMain } from './styles';

interface CardProps {
    children?: any;
}

const Card = ({ children }: CardProps) => {
    return(
        <ContainerMain style={{ background: colors.cardBackground }}>
            {children}
        </ContainerMain>
    )
}

export default Card;