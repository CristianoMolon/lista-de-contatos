import { useState } from 'react'

import * as S from './styles'
import { Button } from '../../Styles'
import * as enums from '../../Utils/Contato'

type Props = {
  name: string
  email: string
  phone: string
  status: enums.Status
}

const Contato = ({ name, email, phone }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
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
            <S.ButtonCancel>Remover</S.ButtonCancel>
          </>
        )}
        <label htmlFor="favorito">Favorito</label>
        <input id="favorito" type="checkbox" />
      </S.ActionsArea>
    </S.Card>
  )
}

export default Contato
