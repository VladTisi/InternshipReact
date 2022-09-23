import React from 'react'
import TextField from '@material-ui/core/TextField'

function MyTextFieldNume(props) {
  try {
    return (
      <div className='textfieldnume'>
        <TextField defaultValue={props.whattodisplay} />
      </div>
    )
  } catch (err) {
    console.log(err)
  }
}

export default MyTextFieldNume
