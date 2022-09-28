import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'
import DateTimePicker from '../../components/CreareConcediu/DateTimePicker.js'
import ComboBoxCC from '../../components/CreareConcediu/ComboBoxCC.js'
import React, { useEffect, useState, useReducer } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import 'assets/css/creareconcediu.css'
import { reducer, initialState } from './reducerHook.js'
import ContainedButtons from 'components/CreareConcediu/btnSubmit.js'
import CreateIcon from '@material-ui/icons/Create'
import { useMutation } from '@apollo/client'
import { INSERT_CERERE_CONCEDIU, INLOCUITORI_QUERRY, TIPCONCEDIU_QUEERY } from './QueriesCC.js'
import PropTypes from 'prop-types'
import { useQueryWithErrorHandling } from 'hooks/errorHandling.js'

var data = [
  { id: 0, name: 'Concediu Odihna' },
  { id: 1, name: 'Concediu Maternitate' },
  { id: 2, name: 'Concediu Paternitate' }
]

function ComponentaCreareConcediu(props) {
  const [insertCerereConcediu] = useMutation(INSERT_CERERE_CONCEDIU)

  const { state, onChangeHandler } = props

  const insertHandler = async () => {
    const { data } = await insertCerereConcediu({
      variables: {
        input: {
          tipConcediuId: state.cmbTipConcediu,
          data_inceput: state.dataInceperii,
          data_sfarsit: state.dataSfarsitului,
          stareConcediuId: 1,
          comentarii: 'Momentan nu2',
          angajatId: 7,
          inlocuitorId: state.cmbInlocuitor
        }
      }
    })
  }

  const { data: myData, loading: myLoading } = useQueryWithErrorHandling(INLOCUITORI_QUERRY, { variables: { inlocuitoriId: 13 } })
  const { data: myData2, loading: myLoading2 } = useQueryWithErrorHandling(TIPCONCEDIU_QUEERY)
  useEffect(() => {
    if (myLoading || !myData) return
  }, [myData])
  useEffect(() => {
    if (myLoading2 || !myData2) return
  }, [myData2])

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
          </div>
          <div className='dataSfarsitului'>
            <DateTimePicker
              label='Data Sfarsitului'
              value={state.dataSfarsitului}
              func={e => onChangeHandler(e, 'dataSfarsitului')}
            ></DateTimePicker>
          </div>
          <div className='tipConcediu'>
            <ComboBoxCC
              onChangeHandler={onChangeHandler}
              data={myData2 ? myData2.tipConcediu : data}
              value={state.tipConcediuId}
              propname='cmbTipConcediu'
              labelname='Tip Concediu'
            ></ComboBoxCC>
          </div>
          <div className='Inlocuitor'>
            <ComboBoxCC
              onChangeHandler={onChangeHandler}
              data={myData ? myData.inlocuitori : data}
              value={state.inlocuitoriId}
              propname='cmbInlocuitor'
              labelname='Inlocuitor'
            ></ComboBoxCC>
          </div>

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
            <ContainedButtons func={insertHandler}></ContainedButtons>
          </div>
        </div>
      </div>
    </div>
  )
}

ComponentaCreareConcediu.propTypes = {
  state: PropTypes.object,
  onChangeHandler: PropTypes.func
}
export default ComponentaCreareConcediu
