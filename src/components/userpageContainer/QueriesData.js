import {gql} from '@apollo/client'

export const LOAD_DATA = gql `
query User($userId: Int) {
  user(id: $userId) {
    id
    nume
    prenume
    echipa
    functie
    sex
    email
    numarTelefon
    salariu
    overtime
    dataAngajarii
  }
}

`