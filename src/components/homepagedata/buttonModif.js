import React from 'react'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create'

export default function ButtonModif() {
  return (
    <div className='modificare'>
      <Button>
        Salvare date <CreateIcon />{' '}
      </Button>

      <Button>
        Modificare date <CreateIcon />{' '}
      </Button>
    </div>
  )
}
