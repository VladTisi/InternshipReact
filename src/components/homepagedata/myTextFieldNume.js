import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

function MyTextFieldNume(props) {
  const { editableField, propname, onChangeHandler } = props
  return (
    <div className='textfieldnume'>
      <TextField onChange={event => onChangeHandler(event.target.value, propname)} value={props.whattodisplay} disabled={!editableField} />
    </div>
  )
}
export default MyTextFieldNume

MyTextFieldNume.propTypes = {
  editableField: PropTypes.func,
  whattodisplay: PropTypes.string,
  propname: PropTypes.string,
  onChangeHandler: PropTypes.func
}
