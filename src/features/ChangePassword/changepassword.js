import React from 'react'
import Containers from "../../components/changePassword/containerChangePass.js"
import { gql, useQuery } from '@apollo/client'
//import { PASSCHANGE_QUERY } from './querryCP.js'

function SimpleCard() {
 // const [data, loading] = useQuery(PASSCHANGE_QUERY)
//  console.log(data)
  return (
    <div className='ContainerUserPage'>
      <Containers />
    </div>
  )
}

export default SimpleCard