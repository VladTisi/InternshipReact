import { gql } from '@apollo/client'

export const GET_APROBATE = gql`
  query aprobate($aprobateId: Int) {
    aprobate(id: $aprobateId) {
      idAngajatFromAngajat

      dataInceput

      dataSfarsit

      stareConcediuId
    }
  }
`
export const GET_REFUZATE = gql`
  query refuzate($refuzateId: Int) {
    refuzate(id: $refuzateId) {
      idAngajatFromAngajat

      dataInceput

      dataSfarsit

      stareConcediuId
    }
  }
`

export const GET_ALL = gql`
  query refuzate($allId: Int) {
    all(id: $allId) {
      idAngajatFromAngajat

      dataInceput

      dataSfarsit

      stareConcediuId
    }
  }
`

export const GET_ASTEPTARE = gql`
  query asteptare($asteptareId: Int) {
    asteptare(id: $asteptareId) {
      idAngajatFromAngajat

      dataInceput

      dataSfarsit

      stareConcediuId
    }
  }
`
