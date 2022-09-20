import React, { useState } from 'react'
import Box from '@mui/material/Box'
import 'assets/css/userpage.css'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import CardContent from '@material-ui/core/CardContent'

import Typography from '@material-ui/core/Typography'
const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '5rem',
  height: '5rem'
}
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
const formLabelStyling = {
  color: 'black',
  maxWidth: 200,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: 'block',
  paddingDown: 125,
  paddingUp: 10
}

export default function SimpleCard() {
  const classes = useStyles()

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
            <div className ='textfield'><TextField></TextField></div> 
          </div>
          <div className='nume'>
            Prenume:
            <div className ='textfield'> <TextField></TextField></div>
          </div>
          <div className='nume'>
            Echipa: 
            <div className ='textfield'>
              <TextField></TextField>
              </div>
            </div>
            <div className='nume'>
            Functie:<div className ='textfield'> <TextField></TextField></div>
            </div>
            <div className='nume'>
            Sex: <div className ='textfield'><TextField></TextField></div>
            </div>

        </div>

        <div className='card2'>
        <div className='nume'>
            Email:
            <div className ='textfield'> <TextField></TextField></div>
          </div>
          <div className='nume'>
            Numar telefon: 
            <div className ='textfield'><TextField></TextField>
              </div>
            </div>
            <div className='nume'>
            Salariu:<div className ='textfield'> <TextField></TextField></div>
            </div>
            <div className='nume'>
            Overtime: <div className ='textfield'><TextField></TextField></div>
            </div>
            <div className='nume'>
            Data angajare: <div className ='textfield'><TextField></TextField></div>
            </div>
       
        </div>
      </body>
    </div>
  )
}
