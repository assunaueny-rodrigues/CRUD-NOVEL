import React from 'react';
import { 
    ContainerMain,
    LabelButton 
} from './styles';

interface ButtonProps {
    label?: string;
    background?: string;
    labelColor?: string;
    onClick?: any;
}

const Button = ({ label, background, labelColor, onClick }: ButtonProps) => {
    return(
        <ContainerMain onClick={onClick} style={{ background: background }}>
            <LabelButton style={{ color: labelColor }} >{label}</LabelButton>
        </ContainerMain>
    )
}

export default Button;