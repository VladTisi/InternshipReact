import { gql } from '@apollo/client'

export const UPDATE_DATA = gql`
  mutation userUpdated($input: personUpd!) {
    userUpdated(input: $input) {
      Id
      Nume
      Prenume
      Echipa {Nume}
      Functie
      {Nume}
      Sex
      Email {Email}
      Numar_telefon
      Salariu
      Overtime
      Data_angajarii
      #Poza
    }
  }
`
