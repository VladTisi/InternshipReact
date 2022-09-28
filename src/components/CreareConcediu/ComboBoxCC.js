import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
function ComboBoxCC(props) {
  const { onChangeHandler, data, value, propname, labelname } = props

  try {
    return (
      <Autocomplete
        options={data}
        style={{ width: 300 }}
        getOptionLabel={option => option.nume}
        onChange={(event, value) => onChangeHandler(value.id, propname)}
        //onChange={handleChange}
        renderInput={params => <TextField {...params} label={labelname} />}
      />
    )
    //dispatch({ type: 'update', e: value, propname: propname }
  } catch (err) {
    console.log(err)
  }
}

export default ComboBoxCC
