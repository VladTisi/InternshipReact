import React from 'react'
import TextField from '@material-ui/core/TextField'

function MyTextField(props) {
  try {
    return (
      <div className='textfield'>
        <TextField value={props.whattodisplay} />
      </div>
    )
  } catch (err) {
    console.log(err)
  }
}

export default MyTextField
