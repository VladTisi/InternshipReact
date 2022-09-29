import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import PropTypes from 'prop-types'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

function ContainedButtons(props) {
  const classes = useStyles()
  const addToast = useToast()
  const { insertHandler } = props

  return (
    <div className='modificareSave'>
      <Button onClick={insertHandler}>
        Trimite <SaveIcon />{' '}
      </Button>
    </div>
  )
}
ContainedButtons.propTypes = {
  insertHandler: PropTypes.func
}

export default ContainedButtons
