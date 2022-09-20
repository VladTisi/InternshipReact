import React from 'react'
import { useApolloClient } from '@apollo/client'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { gql } from '@apollo/client'

const CONCEDII_QUERY = gql`
  query concediiData {
    tipConcedii {
      id
      nume
    }
  }
`

const ConcediiDataProvider = () => {
  const client = useApolloClient()
  useQueryWithErrorHandling(CONCEDII_QUERY, {
    onCompleted: data => {
      client.writeQuery({
        query: CONCEDII_QUERY,
        data: { concediiData: data.userData }
      })
    }
  })
  return <></>
}

export default ConcediiDataProvider
