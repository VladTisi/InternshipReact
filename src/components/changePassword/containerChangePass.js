import React from 'react'
import 'assets/css/changepassword.css'
import { TextField } from '@material-ui/core'
import ContainedButtons from 'components/changePassword/buttonSave.js'
import DoneIcon from '@material-ui/icons/Done'
export default ChangePasswordContainers

function ChangePasswordContainers() {
  return (
    <div className='container111'>
      <div className='title'>
        <div className='titletext'>
          <header>Schimbare parola </header>
        </div>
      </div>
      <div className='card0123'>
        <div className='camp22'>
          {' '}
          <TextField label='Parola veche'></TextField>
        </div>
        <div className='camp22'>
          {' '}
          <TextField label='Parola noua'></TextField>
        </div>
        <div className='camp22'>
          {' '}
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
