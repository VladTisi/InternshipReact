import React, { useEffect, useState } from 'react'
import 'assets/css/changepassword.css'
import { TextField } from '@material-ui/core'
import ContainedButtons from 'components/changePassword/buttonSave.js'
import DoneIcon from '@material-ui/icons/Done'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { Get_pass, Post_update } from './queries'

function ChangePasswordContainers() {
  const [state, setState] = useState(null)

  const { data, loading } = useQueryWithErrorHandling(Get_pass, {
    variables: { passwordId: 2 },
    onCompleted: data => {
      setState(data.pass)
      console.log(data)
    }
  })
  useEffect(() => {
    if (loading || !data) return setState(data?.pass)
  }, [data, loading])

  return (
    <div className='container111'>
      <div className='title'>
        <div className='titletext'>
          <header>Schimbare parola </header>
        </div>
      </div>
      <div className='card0123'>
        <div className='camp22'>
          <TextField label='Parola veche'></TextField>
        </div>
        <div className='camp22'>
          <TextField label='Parola noua'></TextField>
        </div>
        <div className='camp22'>
          <TextField label='Confirmare parola noua '></TextField>
        </div>
        <ContainedButtons>
          <button>
            <DoneIcon />
          </button>
        </ContainedButtons>
      </div>
    </div>
  )
}
export default ChangePasswordContainers
