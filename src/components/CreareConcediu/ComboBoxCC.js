import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
function ComboBoxCC(props) {
  const { data, value, dispatch, propname, labelname } = props

  try {
    return (
      <Autocomplete
        options={data}
        style={{ width: 300 }}
        getOptionLabel={option => option.name}
        value={value}
        onChange={(event, value) => dispatch({ type: 'update', e: value, propname: propname })}
        renderInput={params => <TextField {...params} label={labelname} />}
      />
    )
  } catch (err) {
    console.log(err)
  }
}

export default ComboBoxCC
