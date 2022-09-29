import React from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'
function DateTimePicker(props) {
  try {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justifyContent='space-around'>
          <KeyboardDatePicker
            disabled={props.editableField}
            disableToolbar
            variant='inline'
            format='MM/dd/yyyy'
            margin='normal'
            label={props.label}
            value={props.value}
            onChange={props.func}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    )
  } catch (err) {
    console.log(err)
  }
}

export default DateTimePicker
