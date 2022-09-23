import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import DoneIcon from '@material-ui/icons/Done'

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
    <div className='modificareSave'>
      <Button>
        Salvare parola <DoneIcon />{' '}
      </Button>
    </div>
  )
}
