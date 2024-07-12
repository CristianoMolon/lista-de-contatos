import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Button, Input, ListContainer } from '../../Styles'
import * as enums from '../../Utils/Contato'
import { cadastrar } from '../../Store/reducers/contatos'
import { Form } from './styles'

const NovoContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const cadastrarContato = (event: FormEvent) => {
    event.preventDefault()

    dispatch(cadastrar({ name, email, phone, status: enums.Status.NORMAL }))
    navigate('/')
  }

  return (
    <ListContainer>
      <h2>Novo Contato</h2>
      <Form onSubmit={cadastrarContato}>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Email"
        />
        <Input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          type="text"
          placeholder="Telefone"
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </ListContainer>
  )
}

export default NovoContato
