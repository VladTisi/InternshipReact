import { gql } from '@apollo/client'

export const Get_All = gql`
  query allemp($id: Int) {
    allemp(id: $id) {
      id
      nume
      prenume
      poza
      functia
    }
  }
`
