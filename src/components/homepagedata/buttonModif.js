import React from 'react'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
function ButtonModif(props) {
  const {t}=useTranslation()
  const { updateHandler } = props
  return (
    <div className='modificare'>
      <Button onClick={updateHandler}>
        {t('MyProfile.SalvareDate')} <CreateIcon />{' '}
      </Button>
    </div>
  )
}

ButtonModif.propTypes = {
  updateHandler: PropTypes.func
}

export default ButtonModif
