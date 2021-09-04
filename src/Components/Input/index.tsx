import { 
    ContainerMain,
    InputMain,
    Label 
} from './styles';

interface InputProps {
    labelInput: string;
}

const Input = ({ labelInput }: InputProps) => {
    return(
       <ContainerMain>
            <Label>{labelInput}</Label>
            <InputMain />
       </ContainerMain>
    )
}

export default Input;
