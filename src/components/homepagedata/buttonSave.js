import React from 'react'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create'
import PropTypes from 'prop-types'

export default function ButtonSave(props) {
  const { setEditableField } = props
  return (
    <div className='modificare'>
      <Button onClick={() => setEditableField(prev => !prev)}>
        Modificare date <CreateIcon />{' '}
      </Button>
    </div>
  )
}

ButtonSave.propTypes = {
  setEditableField: PropTypes.func
}
