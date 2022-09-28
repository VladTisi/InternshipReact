import React from 'react'
import { useApolloClient } from '@apollo/client'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { gql } from '@apollo/client'

export const PASSCHANGE_QUERY = gql`
  query changePasswordDefs {
    Password {
      password
    }
  }
`

const PasswordProvider = () => {
  const client = useApolloClient()
  useQueryWithErrorHandling(PASSCHANGE_QUERY), {
    onCompleted: data => {
      client.writeQuery({
        query: PASSCHANGE_QUERY,
        data: { passwordData: data.passwordData }
      })
    }
  })
  return <></>
}

export default PasswordProvider
