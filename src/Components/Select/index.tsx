import { 
    ContainerMain,
    SelectMain,
    Label 
} from './styles';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options?: Array<Option>;
    labelSelect: string;
}

const Select = ({ options, labelSelect }: SelectProps ) => {
    return(
        <ContainerMain>
            <Label>{labelSelect}</Label>
            <SelectMain>
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
    )
}

export default Select;
