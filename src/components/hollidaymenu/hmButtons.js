import React from 'react'
import { Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
export default function HMButtons(props) {
  const { t } = useTranslation()
  const { setData, setPage, aprobate, refuzate } = props
  return (
    <div className='buttons-container'>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setData(aprobate.filter(lista => lista.status == 'Aprobat'))
          setPage(0)
        }}
      >
        {t('Button.Approved')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setData(refuzate.filter(lista => lista.status == 'Refuzat'))
          setPage(0)
        }}
      >
        {t('Button.Refused')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setData(aprobate.filter(lista => lista.status == 'In Asteptare'))
          setPage(0)
        }}
      >
        {t('Button.Pending')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setData(aprobate)
          setPage(0)
        }}
      >
        Reset
      </Button>
    </div>
  )
}
HMButtons.propTypes = {
  aprobate: PropTypes.array.isRequired,
  refuzate: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired
}
