import React from 'react'
import { useApolloClient } from '@apollo/client'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { USER_DATA_QUERY } from 'components/login/queries'

const email = JSON.parse(localStorage.getItem('token'))

const UserDataProvider = () => {
  const client = useApolloClient()
  useQueryWithErrorHandling(USER_DATA_QUERY, {
    variables: { email: email },
    onCompleted: data => {
      client.writeQuery({
        query: USER_DATA_QUERY,
        data: { userData: data.userData }
      })
    }
  })
  return <></>
}

export default UserDataProvider
