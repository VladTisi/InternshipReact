import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { useEffect, useState } from 'react'
import { USER_DATA_QUERY } from './queries'
const { useApolloClient } = require('@apollo/client')
import { useQuery } from '@apollo/client'

const useUserData = () => {
  const client = useApolloClient()

  const { data } = useQueryWithErrorHandling(USER_DATA_QUERY, { fetchPolicy: 'cache-only' })
  const cacheUserData = data?.userData || {
    id: 0,
    esteAdmin: false,
    idFunctie: 0,
    idEchipa: 0,
    managerId: 0
  }

  const [userData, setUserData] = useState(cacheUserData)

  useEffect(() => {
    const sub = client.watchQuery({ query: USER_DATA_QUERY, fetchPolicy: 'cache-only' }).subscribe({
      next: ({ data }) => {
        const userData = data?.userData || {}
        setUserData({ ...(userData || []) })
      }
    })
    return () => sub.unsubscribe()
  }, [client])

  return userData
}

export default useUserData
