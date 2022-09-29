import { gql } from '@apollo/client'

export const GET_ALL = gql`
  query concedii($concediiId: Int) {
    concedii(id: $concediiId) {
      id
      nume
      prenume
      functie
      status
      dataInceput
      dataSfarsit
      inlocuitor
    }
  }
`

export const PUT_REFUZA = gql`
mutation refuzaconcediu($refuzaconcediuId: Int) {
  refuzaconcediu(id: $refuzaconcediuId)
}
`

export const PUT_APROBA = gql`
mutation aprobaconcediu($aprobaconcediuId: Int) {
  aprobaconcediu(id: $aprobaconcediuId)
}
`