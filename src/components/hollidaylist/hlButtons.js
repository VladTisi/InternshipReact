import React from 'react'
import { Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

export default function HMButtons(props) {
  const { t } = useTranslation()
  const { setData, setPage, concedii } = props
  try {
    return (
      <div className='buttons-container'>
        <Button
          className='buttons'
          variant='contained'
          onClick={() => {
            setData(concedii.filter(lista => lista.status == 'Aprobat'))
            setPage(0)
          }}
        >
          {t('Button.Approved')}
        </Button>
        <Button
          className='buttons'
          variant='contained'
          onClick={() => {
            setData(concedii.filter(lista => lista.status == 'Refuzat'))
            setPage(0)
          }}
        >
          {t('Button.Refused')}
        </Button>
      </div>
    )
  } catch (err) {
    console.log(err)
  }
}
HMButtons.propTypes = {
  concedii: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired
}
