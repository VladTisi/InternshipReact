import React from 'react'
import { Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { GET_APROBATE } from './QuerriesHM'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
export default function HMButtons(props) {
  const { t } = useTranslation()
  const { setData, setPage, lista } = props

  return(
    <div className='buttons-container'>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setData(lista.filter(lista => lista.stareConcediuId == 2))
          setPage(0)
        }}
      >
        {t('Button.Approved')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setData(lista.filter(lista => lista.stareConcediuId == 3))
          setPage(0)
        }}
      >
        {t('Button.Refused')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setData(lista.filter(lista => lista.stareConcediuId == 1))
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
