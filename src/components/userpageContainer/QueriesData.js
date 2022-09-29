import { gql } from '@apollo/client'

export const LOAD_DATA = gql`
  query User($userId: Int) {
    user(id: $userId) {
      id
      nume
      prenume
      idEchipa
      idFunctie
      sex
      email
      numarTelefon
      salariu
      overtime
      dataAngajarii
      poza
    }
  }
`
export const ECHIPE = gql`
  query Echipe {
    Echipe {
      nume
      id
    }
  }
`
export const EMAIL = gql`
  query email($emailId: Int) {
    email(id: $emailId) {
      id
      email
    }
  }
`

export const FUNCTII = gql`
  query Functii {
    Functii {
      nume
      id
    }
  }
`

export const UPDATE_PERSON = gql`
  mutation UserUpdated($input: personUpd!) {
    userUpdated(input: $input) {
      result
    }
  }
`
