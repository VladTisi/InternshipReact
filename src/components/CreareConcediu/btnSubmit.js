import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

export default function ContainedButtons(props) {
  const classes = useStyles()
  const { func } = props
  try {
    return (
      <div className='modificareSave'>
        <Button onClick={func}>
          Trimite <SaveIcon />{' '}
        </Button>
      </div>
    )
  } catch (err) {
    console.log(err)
  }
}
