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
import { reducer, initialState } from './reducerHook.js'
import ContainedButtons from 'components/CreareConcediu/btnSubmit.js'
import CreateIcon from '@material-ui/icons/Create'

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

function ComponentaCreareConcediu(props) {
  try {
    const { state, onChangeHandler } = props
    console.log(state)
    console.log(onChangeHandler)
    return (
      <div className='container22'>
        <div className='title22'>
          <div className='titleText22'>Pagina Creare Concediu</div>
        </div>
        <div className='corpCC'>
          <div className='card111'>
            <div className='dataInceperii'>
              <DateTimePicker
                label='Data Inceperii'
                value={state.dataInceperii}
                onChangeHandler={onChangeHandler}
                func={e => onChangeHandler(e, 'dataInceperii')}
              ></DateTimePicker>
              {/* {DateTimePicker({
              label: 'Data Inceperii',
              value: state.dataInceperii,
              func: e => onChangeHandler(e, 'dataInceperii')
            })} */}
            </div>
            <div className='dataSfarsitului'>
              {/* {DateTimePicker({
              label: 'Data Sfarsitului',
              value: state.dataSfarsitului,
              func: e => onChangeHandler(e, 'dataSfarsitului')
            })} */}
              <DateTimePicker
                label='Data Sfarsitului'
                value={state.dataSfarsitului}
                func={e => onChangeHandler(e, 'dataSfarsitului')}
              ></DateTimePicker>
            </div>
            <div className='tipConcediu'>
              <ComboBoxCC
                onChangeHandler={onChangeHandler}
                data={data}
                value={state.cmbTipConcediu}
                propname='cmbTipConcediu'
                labelname='Tip Concediu'
              ></ComboBoxCC>
            </div>
            {/* <ComboBoxCC
            data={data2}
            value={state.cmbInlocuitor}
            onChangeHandler={this.onChangeHandler}
            propname='cmbInlocuitor'
            labelname='Inlocuitor'
             ></ComboBoxCC> */}
            <div className='Comentarii'>
              <div className='TextComentarii'>Comentarii:</div>
              <div className='TextBoxComentarii'>
                <TextField></TextField>
              </div>
            </div>
          </div>
          <div className='card222'>
            <div className='ZileRamase'>
              <div className='ZileRamaseText'>Zile ramase: </div>

              <div className='ZileRamaseOdihna'>Odihna: </div>

              <div className='ZileRamaseDeces'>Deces: </div>

              <div className='ZileRamaseMedical'>Medical: </div>

              <div className='ZileRamaseNeplatite'>Neplatite: </div>
              <ContainedButtons> </ContainedButtons>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    console.log(err)
  }
}

export default ComponentaCreareConcediu
