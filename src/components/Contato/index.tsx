import { useEffect, useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Button } from '../../Styles'
import { remover, editar } from '../../Store/reducers/contatos'
import contatoClass from '../../Models/Contato'

type Props = contatoClass

const Contato = ({
  name,
  email: emailOriginal,
  phone: phoneOriginal,
  id,
  status
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (phoneOriginal.length > 0) {
      setPhone(phoneOriginal)
    }
  }, [phoneOriginal])

  function cancelEdit() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setPhone(phoneOriginal)
  }

  return (
    <S.Card>
      <S.Favorite parametro="status" status={status}>
        {<IoMdStar />}
      </S.Favorite>
      <S.Name>{name}</S.Name>
      <S.Email
        placeholder="Email"
        disabled={!estaEditando}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      >
        {email}
      </S.Email>
      <S.Phone
        placeholder="Telefone"
        disabled={!estaEditando}
        value={phone}
        onChange={(evento) => setPhone(evento.target.value)}
      >
        {phone}
      </S.Phone>
      <S.ActionsArea>
        {estaEditando ? (
          <>
            <Button
              onClick={() => {
                dispatch(
                  editar({
                    name,
                    email,
                    phone,
                    status,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </Button>
            <S.ButtonCancel
              onClick={() => {
                cancelEdit
              }}
            >
              Cancelar
            </S.ButtonCancel>
          </>
        ) : (
          <>
            <Button onClick={() => setEstaEditando(true)}>Editar</Button>
            <S.ButtonCancel onClick={() => dispatch(remover(id))}>
              Remover
            </S.ButtonCancel>
          </>
        )}
      </S.ActionsArea>
    </S.Card>
  )
}

export default Contato
