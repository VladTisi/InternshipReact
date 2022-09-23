import React from 'react'
import Button from '@material-ui/core/Button'
import DoneIcon from '@material-ui/icons/Done'

export default function ButtonSave() {
  return (
    <div className='modificareSave'>
      <Button>
        Salvare parola <DoneIcon />{' '}
      </Button>
    </div>
  )
}
