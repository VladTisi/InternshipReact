import { gql } from '@apollo/client'

export const USER_DATA_QUERY = gql`
  query userData($email: String!) {
    userData(email: $email) {
      id
      esteAdmin
      idFunctie
      idEchipa
      managerId
    }
  }
`
