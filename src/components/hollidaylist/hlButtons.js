import React from 'react'
import { Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

export default function HMButtons(props) {
  const { t } = useTranslation()
  const { a } = props
  try {
    return (
      <div className='buttons-container'>
        <Button
          className='buttons'
          variant='contained'
          onClick={() => {
            
          }}
        >
          {t('Button.Approve')}
        </Button>
        <Button
          className='buttons'
          variant='contained'
          onClick={() => {
            
          }}
        >
          {t('Button.Refuse')}
        </Button>
      </div>
    )
  } catch (err) {
    console.log(err)
  }
}
HMButtons.propTypes = {
  
}
