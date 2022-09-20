import React from 'react'
import 'assets/css/userpage.css'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';


const useStyles = makeStyles({
  root: {
    minWidth: 155
  },

  title: {
    fontSize: 10
  },
  pos: {
    marginBottom: 12
  }
})

export default function Containers() {
  return (
    <div className='container1'>
      <div className='title'>
        <div className='titletext'>
          <header>Date personale</header>
        </div>
      </div>
      <body>
        <div className='card1'>
          <div className='nume'>
            Nume:
            <div className='textfield'>
              <TextField></TextField>
            </div>
          </div>
          <div className='nume'>
            Prenume:
            <div className='textfield'>
              {' '}
              <TextField></TextField>
            </div>
          </div>
          <div className='nume'>
            Echipa:
            <div className='textfield'>
              <TextField></TextField>
            </div>
          </div>
          <div className='nume'>
            Functie:
            <div className='textfield'>
              {' '}
              <TextField></TextField>
            </div>
          </div>
          <div className='nume'>
            Sex:{' '}
            <div className='textfield'>
              <TextField></TextField>
            </div>
          </div>
        </div>

        <div className='card2'>
          <div className='modif'>Modificare date</div>
          <div className='iconset'>
            <SettingsApplicationsIcon />
          </div>
          <div className='nume'>
            Email:
            <div className='textfield'>
              {' '}
              <TextField></TextField>
            </div>
          </div>
          <div className='nume'>
            Numar telefon:
            <div className='textfield'>
              <TextField></TextField>
            </div>
          </div>
          <div className='nume'>
            Salariu:
            <div className='textfield'>
              {' '}
              <TextField></TextField>
            </div>
          </div>
          <div className='nume'>
            Overtime:{' '}
            <div className='textfield'>
              <TextField></TextField>
            </div>
          </div>
          <div className='nume'>
            Data angajare:{' '}
            <div className='textfield'>
              <TextField></TextField>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}
