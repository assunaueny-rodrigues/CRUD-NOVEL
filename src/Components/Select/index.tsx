import { 
    ContainerMain,
    SelectMain,
    Label,
    ErroMessage, 
} from './styles';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options?: Array<Option>;
    labelSelect: string;
    name?: string;
    value?: any;
    onChange?: any;
    errorMessage?: string;
}

const Select = ({ options, labelSelect, name, value, onChange, errorMessage }: SelectProps ) => {
    return(
        <>
            <ContainerMain>
                <Label>{labelSelect}</Label>
                <SelectMain value={value} name={name} onChange={onChange}>
                    <option key='' value='' >
                    
                    </option>
                    {options?.map((element: Option) => {
                            return(
                                <option key={element.value} value={element.value} >
                                    {element.label}
                                </option>
                            )
                        })
                    }
                </SelectMain>
            </ContainerMain>
            <ErroMessage>{errorMessage}</ErroMessage>
        </>
    )
}

export default Select;
