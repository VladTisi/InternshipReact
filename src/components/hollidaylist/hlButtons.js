import React from 'react'
import { Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { PUT_APROBA, PUT_REFUZA } from './QuerriesHL'
import { useMutation } from '@apollo/client'

function refreshPage() {
  window.location.reload(false);
}
export default function HMButtons(props) {
  const { t } = useTranslation()
  const { rowId, setRowId } = props
  const [refuza]= useMutation(PUT_REFUZA)
  const [aproba]= useMutation(PUT_APROBA)
  try {
    return (
      <div className='buttons-container'>
        <Button
          className='buttons'
          variant='contained'
          onClick={() => {
            setRowId(0)
            aproba({variables: {aprobaconcediuId: rowId }})
            refreshPage()
          }}
        >
          {t('Button.Approve')}
        </Button>
        <Button
          className='buttons'
          variant='contained'
          onClick={() => {
            setRowId(0)
            refuza({variables: {aprobaconcediuId: rowId }})
            refreshPage()
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
  rowId: PropTypes.number.isRequired
}
