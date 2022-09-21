import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create'
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

export default function ContainedButtons() {
  const classes = useStyles()

  return (
    <div className='modificare'>
      <Button>Salvare date <CreateIcon/> </Button>
    
    
      <Button>Modificare date <CreateIcon/> </Button>
    </div>
  )
}

