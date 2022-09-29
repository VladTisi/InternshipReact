import React from 'react'
import TextField from '@material-ui/core/TextField'

function TextFieldHP(props) {
  try {
    return (
      <div className='textfield'>
        <TextField label={props.whattodisplay} />
      </div>
    )
  } catch (err) {
    console.log(err)
  }
}

export default TextFieldHP
