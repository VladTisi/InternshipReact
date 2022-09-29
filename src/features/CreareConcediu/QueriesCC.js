import React from 'react'
import { useApolloClient } from '@apollo/client'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { gql } from '@apollo/client'

export const CONCEDII_QUERY = gql`
  query concediiData {
    tipConcedii {
      id
      nume
    }
  }
`

export const INSERT_CERERE_CONCEDIU = gql`
  mutation insertCerereConcediu($input: CerereConcediu!) {
    insertCerereConcediu(input: $input)
  }
`
export const INLOCUITORI_QUERRY = gql`
  query Inlocuitori($inlocuitoriId: Int) {
    inlocuitori(id: $inlocuitoriId) {
      id
      nume
    }
  }
`
export const TIPCONCEDIU_QUEERY = gql`
  query TipConcediu($tipConcediuId: Int) {
    tipConcediu(id: $tipConcediuId) {
      id
      nume
    }
  }
`
