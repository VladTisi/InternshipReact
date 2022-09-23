import React from 'react'
import { Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
export default function HMButtons(props) {
  const { t } = useTranslation()
  const { setData, setPage, lista } = props
  return (
    <div className='buttons-container'>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setData(lista.filter(lista => lista.status == 'Aprobat'))
          setPage(0)
        }}
      >
        {t('Button.Approved')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setData(lista.filter(lista => lista.status == 'Refuzat'))
          setPage(0)
        }}
      >
        {t('Button.Refused')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setData(lista.filter(lista => lista.status == 'In Asteptare'))
          setPage(0)
        }}
      >
        {t('Button.Pending')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setData(lista)
          setPage(0)
        }}
      >
        Reset
      </Button>
    </div>
  )
}
HMButtons.propTypes = {
  lista: PropTypes.object.isRequired,
  setPage: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired
}
