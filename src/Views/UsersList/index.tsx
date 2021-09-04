import React from 'react';
import Card from '../../Components/Card';
import { 
    ContainerMain,
    ContainerCardDataBase,
    ContainerCardForm,
    Table,
    THead,
    TBody,
    TH,
    TR,
    TD,
    Label,
    ContainerForm,
    ContainerFormInline 
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import colors from '../../GlobalStyles';
import Button from '../../Components/Button';
import Select from '../../Components/Select';
import Input from '../../Components/Input';
import { Formik } from 'formik';
import * as yup from 'yup'

interface Option {
    value: string;
    label: string;
}

interface SelectData extends Array<Option>{}

const users: SelectData = [
    {
        value: 'ADMINISTRADOR',
        label: "ADMINISTRADOR"
    },
    {
        value: 'CLIENTE',
        label: "CLIENTE"
    }
]

const genres: SelectData = [
    {
        value: 'MASCULINO',
        label: "MASCULINO"
    },
    {
        value: 'FEMININO',
        label: "FEMININO"
    }
]

const UserList = () => {

    const validationSchema = yup.object().shape({
        
    })


    return(
        <ContainerMain>
            <Formik
                initialValues={{ profile: '', name: '', age: '', gender: ''}}
                onSubmit={ async (values) => {
                    
                }}
                validationSchema={validationSchema}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                    <ContainerCardDataBase>
                        <Card>
                            <Table>
                                <THead>
                                    <TR>
                                        <TH>Nome</TH>
                                        <TH>Idade</TH>
                                        <TH>Gênero</TH>
                                        <TH>Perfil</TH>
                                        <TH></TH>
                                    </TR>
                                </THead>
                                <TBody>
                                    <TR>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                    </TR>
                                    <TR>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                    </TR>
                                    <TR>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                    </TR>
                                    <TR>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                    </TR>
                                    <TR>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                    </TR>
                                    <TR>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                        <TD>Contat</TD>
                                    </TR>
                                </TBody>
                            </Table>
                        </Card>
                    </ContainerCardDataBase>
                    <ContainerCardForm>
                        <Card>
                            <Label style={{ fontWeight: 'bold' }}>Novo Usuário</Label>
                            <ContainerForm>
                                <Select options={users} labelSelect="Perfil" />
                                <Input labelInput="Nome" />
                                <ContainerFormInline>
                                    <Input labelInput="Idade" />
                                    <Select options={genres} labelSelect="Gênero" />
                                </ContainerFormInline>
                                <ContainerFormInline style={{ justifyContent: 'flex-end' }}>
                                    <Button label="Limpar" background={colors.buttonSecondary} labelColor={colors.black} />
                                    <Button label="Salvar" background={colors.buttonPrimary} labelColor={colors.white} />
                                </ContainerFormInline>
                            </ContainerForm>
                        </Card>
                    </ContainerCardForm>
                </>
            )}
            </Formik>
        </ContainerMain>
    )
}

export default UserList;