import React from 'react'
import { Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
export default function HMButtons(props) {
  const { t } = useTranslation()
  const { setState, setPage, aprobate } = props
  return (
    <div className='buttons-container'>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setState(aprobate.filter(aprobate => aprobate.stareConcediuId == 2))
          setPage(0)
        }}
      >
        {t('Button.Approved')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setState(aprobate.filter(aprobate => aprobate.stareConcediuId == 3))
          setPage(0)
        }}
      >
        {t('Button.Refused')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setState(aprobate.filter(aprobate => aprobate.stareConcediuId == 1))
          setPage(0)
        }}
      >
        {t('Button.Pending')}
      </Button>
    </div>
  )
}
HMButtons.propTypes = {
  aprobate: PropTypes.array.isRequired,
  setState: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired
}
