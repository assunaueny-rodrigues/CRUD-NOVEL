import { 
    ContainerMain,
    ErroMessage,
    InputMain,
    Label 
} from './styles';

interface InputProps {
    labelInput: string;
    onChange?: any;
    name?: string;
    value?: any;
    errorMessage?: string;
}

const Input = ({ labelInput, onChange, value, name, errorMessage }: InputProps) => {
    return(
        <>
            <ContainerMain>
                <Label>{labelInput}</Label>
                <InputMain name={name} value={value} onChange={onChange} />
            </ContainerMain>
            <ErroMessage>{errorMessage}</ErroMessage>
        </>
    )
}

export default Input;
