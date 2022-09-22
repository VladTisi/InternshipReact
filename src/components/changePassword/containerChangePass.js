import React from 'react'
import 'assets/css/changepassword.css'
import { TextField } from '@material-ui/core'
import ContainedButtons from 'components/changePassword/buttonSave.js'
import CreateIcon from '@material-ui/icons/Create'

export default ChangePasswordContainers

function ChangePasswordContainers() {
  return (
    <div className='container1'>
      <div className='title'>
        <div className='titletext'>
          <header>Schimbare parola </header>
        </div>
      </div>
      <div className='card'>
        <div className='camp'>
          {' '}
          <TextField label='Parola veche'></TextField>
        </div>
        <div className='camp'>
          {' '}
          <TextField label='Parola noua'></TextField>
        </div>
        <div className='camp'>
          {' '}
          <TextField label='Confirmare parola noua '></TextField>
        </div>
        <ContainedButtons>
        <button >
          
          <CreateIcon />
        </button>
      </ContainedButtons>
      </div>
    </div>
  )
}
