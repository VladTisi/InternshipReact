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
