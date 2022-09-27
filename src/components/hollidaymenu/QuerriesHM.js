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
