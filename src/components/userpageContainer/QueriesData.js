import {gql} from '@apollo/client'

export const LOAD_DATA = gql `
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
  }
}
`
export const ECHIPE = gql `
query Echipe {
  Echipe {
    nume
    id
  }
}`