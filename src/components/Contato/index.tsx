import { useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { Button } from '../../Styles'
import { remover } from '../../Store/reducers/contatos'
import contatoClass from '../../Models/Contato'

type Props = contatoClass

const Contato = ({ name, email, phone, id, status }: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Favorite parametro="status" status={status}>
        {<IoMdStar />}
      </S.Favorite>
      <S.Name>{name}</S.Name>
      <S.Email>{email}</S.Email>
      <S.Phone>{phone}</S.Phone>
      <S.ActionsArea>
        {estaEditando ? (
          <>
            <Button>Salvar</Button>
            <S.ButtonCancel onClick={() => setEstaEditando(false)}>
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
