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
    ContainerFormInline,
    IconButton,
    SubContainerFormInline, 
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt, faUser, faCalendar, faVenusMars, faDatabase } from '@fortawesome/free-solid-svg-icons';
import colors from '../../GlobalStyles';
import Button from '../../Components/Button';
import Select from '../../Components/Select';
import Input from '../../Components/Input';
import { Formik } from 'formik';
import * as yup from 'yup'
import { useState } from 'react';
import { User, UsersList } from '../../Models/User';
import { useEffect } from 'react';
import { onlyLetters, onlyNumbers } from '../../validations/mask';

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

    const [ registeredUsers, setRegisteredUsers ] = useState<UsersList>([])
    const [ updated, setUpdated ] = useState(false)
    const [ isUpdateButton, setIsUpdateButton ] = useState(false)
    const [ idUserUpdated, setIdUserUpdated ] = useState(-1)
    const [ indexUserUpdated, setIndexUserUpdated ] = useState(-1)

    const validationSchema = yup.object().shape({
        profile: yup
          .string()
          .required('O campo Perfil é obrigatório!'),
        name: yup
          .string()
          .required('O campo Nome é obrigatório!'),
        age: yup
          .string()
          .required('O campo Idade é obrigatório!'),
        gender: yup
          .string()
          .required('O campo Gênero é obrigatório!'),
    })

    const deleteUser = (index: number) => {
        registeredUsers.splice(index, 1)
        setUpdated(!updated)
    }

    useEffect(() => {
        let data = localStorage.getItem("database")
        if(data !== null){
            setRegisteredUsers(JSON.parse(data))
        }
        // setRegisteredUsers(JSON.parse(data))
    }, [updated])

    return(
        <ContainerMain>
            <Formik
                enableReinitialize
                initialValues={{ profile: '', name: '', age: '', gender: ''}}
                onSubmit={ async (values, resetForm) => {
                    if(!isUpdateButton){
                        let newId = Math.floor(Math.random() * (100000 - 1 + 1)) + 1;
                        let user: User = {
                            id: newId,
                            name: values.name,
                            age: parseInt(values.age),
                            gender: values.gender,
                            profile: values.profile
                        }
                        let checkExistence = false;
                        registeredUsers.map((element) => {
                            if(element.name === user.name){
                                checkExistence = true
                                alert("Já existe um usuário com esse NOME em nossa base de dados!")
                            }
                        })
                        if(!checkExistence){
                            registeredUsers.push(user)
                            values.profile = ''
                            values.name = ''
                            values.age = ''
                            values.gender = ''
                        }
                    }
                    else{
                        let user: User = {
                            id: idUserUpdated,
                            name: values.name,
                            age: parseInt(values.age),
                            gender: values.gender,
                            profile: values.profile
                        }
                        registeredUsers[indexUserUpdated] = user;
                        values.profile = ''
                        values.name = ''
                        values.age = ''
                        values.gender = ''
                        setIsUpdateButton(false)
                        setIndexUserUpdated(-1)
                        setIdUserUpdated(-1)
                    }
                    localStorage.setItem("database", JSON.stringify(registeredUsers))  
                }}
                validationSchema={validationSchema}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors, resetForm }) => (
                <>
                    <ContainerCardDataBase>
                        <Card>
                            <Label style={{ padding: '3px', fontWeight: 'bold', fontSize: 20}}> <FontAwesomeIcon icon={ faDatabase }/> Banco de Dados</Label>
                            <Table>
                                <THead>
                                    <TR>
                                        <TH> <FontAwesomeIcon icon={ faUser }/> Nome</TH>
                                        <TH> <FontAwesomeIcon icon={ faCalendar }/> Idade</TH>
                                        <TH> <FontAwesomeIcon icon={ faVenusMars }/> Gênero</TH>
                                        <TH> <FontAwesomeIcon icon={ faUser }/> Perfil</TH>
                                        <TH></TH>
                                    </TR>
                                </THead>
                                {registeredUsers.length > 0 &&
                                    <TBody>
                                        {registeredUsers.map((element: User, index: number) => {
                                            return(
                                                <TR key={element.id}>
                                                    <TD>{element.name}</TD>
                                                    <TD>{element.age}</TD>
                                                    <TD>{element.gender}</TD>
                                                    <TD>{element.profile}</TD>
                                                    <TD style={{ textAlign: 'right' }}>
                                                        <IconButton 
                                                            onClick={
                                                                () => {
                                                                    values.name = element.name
                                                                    values.age = element.age.toString()
                                                                    values.profile = element.profile
                                                                    values.gender = element.gender
                                                                    setIdUserUpdated(element.id)
                                                                    setIndexUserUpdated(index)
                                                                    setIsUpdateButton(true)
                                                                    setUpdated(!updated)
                                                                }
                                                            }    
                                                        >
                                                            <FontAwesomeIcon icon={ faPen } color={colors.iconUpdate} />
                                                        </IconButton>
                                                        {element.profile !== "ADMINISTRADOR" && 
                                                            <IconButton 
                                                                onClick={
                                                                    () => {
                                                                        registeredUsers.map((user, index) => {
                                                                            if(user.id === element.id){
                                                                                deleteUser(index)
                                                                            }
                                                                        })
                                                                    }
                                                                }
                                                            >
                                                                <FontAwesomeIcon icon={ faTrashAlt } color={colors.iconDelete} />
                                                            </IconButton>
                                                        }
                                                    </TD>
                                                </TR>
                                            )
                                            })
                                        }
                                    </TBody>
                                }
                            </Table>
                            {registeredUsers.length === 0 &&
                                <div>
                                    <p>Nenhum usuário cadastrado!</p>
                                </div>
                            }
                        </Card>
                    </ContainerCardDataBase>
                    <ContainerCardForm>
                        <Card>
                            <Label style={{ fontWeight: 'bold' }}>Novo Usuário</Label>
                            <ContainerForm>
                                <Select onChange={handleChange} name="profile" value={values.profile} options={users} labelSelect="Perfil" errorMessage={errors.profile} />
                                <Input onChange={handleChange} labelInput="Nome" name="name" value={onlyLetters(values.name)} errorMessage={errors.name} />
                                <ContainerFormInline>
                                    <SubContainerFormInline style={{ width: '45%' }}>
                                        <Input onChange={handleChange} labelInput="Idade" name="age" value={onlyNumbers(values.age)} errorMessage={errors.age} />
                                    </SubContainerFormInline>
                                    <SubContainerFormInline style={{ width: '55%' }}>
                                        <Select onChange={handleChange} name="gender" value={values.gender} options={genres} labelSelect="Gênero" errorMessage={errors.gender} />
                                    </SubContainerFormInline>
                                </ContainerFormInline>
                                <ContainerFormInline style={{ justifyContent: 'flex-end' }}>
                                    <Button 
                                        onClick={() => {
                                            resetForm({})
                                            setIsUpdateButton(false)
                                            setIndexUserUpdated(-1)
                                            setIdUserUpdated(-1)
                                        }} 
                                    label="Limpar" background={colors.buttonSecondary} labelColor={colors.black} />
                                    <Button onClick={handleSubmit} label="Salvar" background={colors.buttonPrimary} labelColor={colors.white}/>
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