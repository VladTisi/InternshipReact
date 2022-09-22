import React from 'react'
import TextField from '@material-ui/core/TextField'

function myTextField(props) {
  return (
    <div className='textfield'>
      <TextField defaultValue={props.whattodisplay} />
    </div>
  )
}

export default myTextField
