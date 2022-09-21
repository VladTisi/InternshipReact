import React from 'react'
import TextField from '@material-ui/core/TextField'

function myTextFieldNume(props) {
  return (
    <div className='textfieldnume'>
      <TextField value={props.whattodisplay} />
    </div>
  )
}

export default myTextFieldNume
