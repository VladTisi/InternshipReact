import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
function ComboBoxCC(props) {
  try {
    return (
      <Autocomplete
        options={props}
        id='cmbTipConcediu'
        style={{ width: 300 }}
        getOptionLabel={option => option.name}
        value={props.id}
        renderInput={params => <TextField {...params} label='Tip Concediu' />}
      />
    )
  } catch (err) {
    console.log(err)
  }
}

export default ComboBoxCC
