import * as enums from '../Utils/Contato'

class Contato {
  name: string
  email: string
  phone: string
  status: enums.Status
  id: number

  constructor(
    name: string,
    email: string,
    phone: string,
    status: enums.Status,
    id: number
  ) {
    this.name = name
    this.email = email
    this.phone = phone
    this.status = status
    this.id = id
  }
}

export default Contato
