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
