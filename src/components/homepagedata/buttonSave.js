import React from 'react'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

export default function ButtonSave(props) {
  const { setEditableField } = props
  const {t}=useTranslation()
  return (
    <div className='modificare'>
      <Button onClick={() => setEditableField(prev => !prev)}>
        {t('MyProfile.ModificareDate')} <CreateIcon />{' '}
      </Button>
    </div>
  )
}

ButtonSave.propTypes = {
  setEditableField: PropTypes.func
}
