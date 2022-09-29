import React from 'react'
import Containers from '../../components/changePassword/containerChangePass.js'
import { gql, useQuery } from '@apollo/client'

function SimpleCard() {
  return (
    <div className='ContainerUserPage'>
      <Containers />
    </div>
  )
}

export default SimpleCard
