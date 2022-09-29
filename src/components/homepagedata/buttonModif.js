import React from 'react'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create'
import PropTypes from 'prop-types'
function ButtonModif(props) {
  const { updateHandler } = props
  return (
    <div className='modificare'>
      <Button onClick={updateHandler}>
        Salvare date <CreateIcon />{' '}
      </Button>
    </div>
  )
}

ButtonModif.propTypes = {
  updateHandler: PropTypes.func
}

export default ButtonModif
