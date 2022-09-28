import React from 'react'
import { Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
export default function HMButtons(props) {
  const { t } = useTranslation()
  const { setSearchTerm } = props
  return (
    <div className='buttons-container'>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setSearchTerm(2)
        }}
      >
        {t('Button.Approved')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setSearchTerm(3)
        }}
      >
        {t('Button.Refused')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setSearchTerm(1)
        }}
      >
        {t('Button.Pending')}
      </Button>
    </div>
  )
}
HMButtons.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
}
