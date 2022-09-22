import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'
import DateTimePicker from '../../components/CreareConcediu/DateTimePicker.js'
import ComboBoxCC from '../../components/CreareConcediu/ComboBoxCC.js'
import React, { useEffect, useState, useReducer } from 'react'
import ConcediiDataProvider from './QueriesCC.js'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import 'assets/css/creareconcediu.css'
import reducer from './reducerHook.js'
const initialState = {
  dataInceperii: new Date(),
  dataSfarsitului: new Date(),
  cmbInlocuitor: 0,
  cmbTipConcediu: 0
}
var data = [
  { id: 0, name: 'Concediu Odihna' },
  { id: 1, name: 'Concediu Maternitate' },
  { id: 2, name: 'Concediu Paternitate' }
]
var data2 = [
  { id: 0, name: 'Inloc 1' },
  { id: 1, name: 'Inloc 2' },
  { id: 2, name: 'Inloc 3' }
]

function ComponentaCreareConcediu() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='container22'>
      <div className='title22'>
        <div className='titleText22'>Pagina Creare Concediu</div>
      </div>
      <div className='card'>
        <div className='dataInceperii'>
          {DateTimePicker({
            label: 'Data Inceperii',
            value: state.dataInceperii,
            func: e => dispatch({ type: 'update', e: e, propname: 'dataInceperii' })
          })}
        </div>
        <div className='dataSfarsitului'>
          {DateTimePicker({
            label: 'Data Sfarsitului',
            value: state.dataSfarsitului,
            func: e => dispatch({ type: 'update', e: e, propname: 'dataSfarsitului' })
          })}
        </div>
        <div className='tipConcediu'>{ComboBoxCC(data)}</div>
        <div className='Inlocuitor'>{ComboBoxCC(data2)}</div>
        <div className='Comentarii'>
          <div className='TextComentarii'>Comentarii:</div>
          <div className='TextBoxComentarii'>
            <TextField></TextField>
          </div>
        </div>
        <div className='ZileRamase'>
          <div className='ZileRamaseText'>Zile ramase: </div>
          <div className='ZileRamaseOdihna'>Odihna: </div>
          <div className='ZileRamaseDeces'>Deces: </div>
          <div className='ZileRamaseMedical'>Medical: </div>
          <div className='ZileRamaseNeplatite'>Neplatite: </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentaCreareConcediu