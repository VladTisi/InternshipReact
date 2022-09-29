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
import {
  INSERT_CERERE_CONCEDIU,
  INLOCUITORI_QUERRY,
  TIPCONCEDIU_QUEERY,
  ZileRamaseNeplatite,
  ZileRamaseMedical,
  ZileRamaseDeces,
  ZileRamaseOdihna
} from './QueriesCC.js'
import PropTypes from 'prop-types'
import { useQueryWithErrorHandling } from 'hooks/errorHandling.js'
import MyTextField from '../../components/homepagedata/MyTextField.js'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'

var data = [
  { id: 0, name: 'Concediu Odihna' },
  { id: 1, name: 'Concediu Maternitate' },
  { id: 2, name: 'Concediu Paternitate' }
]

function ComponentaCreareConcediu(props) {
  const [insertCerereConcediu] = useMutation(INSERT_CERERE_CONCEDIU)

  const { state, onChangeHandler } = props
  const addToast = useToast()

  const insertHandler = async () => {
    if (!state.cmbInlocuitor) {
      addToast('Inlocuitor gol', 'error')
      return
    }
    if (!state.cmbTipConcediu) {
      addToast('Tip concediu nedifinit', 'error')
      return
    }

    if (state.dataSfarsitului < state.dataInceperii) {
      addToast('Data sfarsitului nu poate fi mai mica decat data inceputului', 'error')
      return
    }
    const { data } = await insertCerereConcediu({
      variables: {
        input: {
          tipConcediuId: state.cmbTipConcediu,
          data_inceput: state.dataInceperii,
          data_sfarsit: state.dataSfarsitului,
          stareConcediuId: 1,
          comentarii: 'Nu sunt comentarii',
          angajatId: 7,
          inlocuitorId: state.cmbInlocuitor
        }
      }
    })
    if (data) addToast('Concediul a fost inserat', 'success')
  }

  const { data: myData, loading: myLoading } = useQueryWithErrorHandling(INLOCUITORI_QUERRY, { variables: { inlocuitoriId: 13 } })

  const { data: ZileRamaseOdihnaQ, loading: ZileRamaseOdihnaLoading } = useQueryWithErrorHandling(ZileRamaseOdihna, {
    variables: { angajatId: 13 }
  })

  const { data: ZileRamaseDecesQ, loading: ZileRamaseDecesLoading } = useQueryWithErrorHandling(ZileRamaseDeces, {
    variables: { angajatId: 13 }
  })

  const { data: ZileRamaseMedicalQ, loading: ZileRamaseMedicalLoading } = useQueryWithErrorHandling(ZileRamaseMedical, {
    variables: { angajatId: 13 }
  })

  const { data: ZileRamaseNeplatiteQ, loading: ZileRamaseNeplatiteLoading } = useQueryWithErrorHandling(ZileRamaseNeplatite, {
    variables: { angajatId: 13 }
  })
  const { data: myData2, loading: myLoading2 } = useQueryWithErrorHandling(TIPCONCEDIU_QUEERY)
  useEffect(() => {
    if (myLoading || !myData) return
  }, [myData])
  useEffect(() => {
    if (myLoading2 || !myData2) return
  }, [myData2])
  useEffect(() => {
    if (ZileRamaseOdihnaLoading || !ZileRamaseOdihnaQ) return
    onChangeHandler(ZileRamaseOdihnaQ.ZileRamaseOdihna, 'ZileRamaseOdihna')
  }, [ZileRamaseOdihnaQ])
  useEffect(() => {
    if (ZileRamaseDecesLoading || !ZileRamaseDecesQ) return
    onChangeHandler(ZileRamaseDecesQ.ZileRamaseDeces, 'ZileRamaseDeces')
  }, [ZileRamaseDecesQ])
  useEffect(() => {
    if (ZileRamaseMedicalLoading || !ZileRamaseMedicalQ) return
    onChangeHandler(ZileRamaseMedicalQ.ZileRamaseMedical, 'ZileRamaseMedical')
  }, [ZileRamaseMedicalQ])
  useEffect(() => {
    if (ZileRamaseNeplatiteLoading || !ZileRamaseNeplatiteQ) return
    onChangeHandler(ZileRamaseNeplatiteQ.ZileRamaseNeplatite, 'ZileRamaseNeplatite')
  }, [ZileRamaseOdihnaQ])

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
        </div>
        <div className='card222'>
          <div className='ZileRamase'>
            <div className='ZileRamaseText'>Zile ramase </div>

            <div className='ZileRamaseOdihna'>Odihna : {state.ZileRamaseOdihna}</div>

            <div className='ZileRamaseDeces'>Deces : {state.ZileRamaseDeces}</div>

            <div className='ZileRamaseMedical'>Medical : {state.ZileRamaseMedical}</div>

            <div className='ZileRamaseNeplatite'>Neplatite : {state.ZileRamaseNeplatite}</div>
            <ContainedButtons insertHandler={insertHandler}></ContainedButtons>
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
