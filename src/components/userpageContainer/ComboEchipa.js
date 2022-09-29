import React, { useMemo } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

function ComboBoxEchipa(props) {
  const { defaultValue, inputValue, onChangeHandler, data, value, propname, labelname } = props

  try {
    const dateechipa = useMemo(() => {
      return data.find(x => x.id === value)
    }, [value, data])

    return (
      <Autocomplete
        options={data}
        value={dateechipa}
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

export default ComboBoxEchipa
