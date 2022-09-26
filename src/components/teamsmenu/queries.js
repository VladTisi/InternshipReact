import { gql } from '@apollo/client'

export const GET_GOT = gql`
  query team($id: Int) {
    team(id: $id) {
      id
      nume
      prenume
      poza
      functia
    }
  }
`

export const GET_Stranger = gql`
  query teamStranger($id: Int) {
    teamStranger(id: $id) {
      id
      nume
      prenume
      poza
      functia
    }
  }
`

export const GET_BB = gql`
  query teamBB($id: Int) {
    teamBB(id: $id) {
      id
      nume
      prenume
      poza
      functia
    }
  }
`
