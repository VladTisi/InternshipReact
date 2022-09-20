// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { RestLink } from 'apollo-link-rest';
// const restLink = new RestLink({ uri: "http://localhost:5031/api/" });
// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: restLink
//   });
//   import { gql } from '@apollo/client';

// const query = gql`
//   query Luke {
//     person @rest(type: "TipConcedii", path: "CerereConcediu/GetTipConcediu") {
//       name
//     }
//   }`;

//   client.query({ query }).then(response => {
//     console.log(response.data.person.name);
//   });

import 'date-fns'
import Grid from '@material-ui/core/Grid'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'
import React, { useEffect, useState } from 'react'
import ConcediiDataProvider from './QueriesCC.js'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import 'assets/css/creareconcediu.css'

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
function CreareConcediu() {
  const [dataInceperii, setDataInceperii] = useState(new Date())
  const [dataSfarsitului, setDataSfarsitului] = useState(new Date())
  const [option, setOption] = useState('')
  useEffect(() => {
    console.log(dataInceperii)
  }, [dataInceperii, dataSfarsitului])

  return (
    <div className='container22'>
      <div className='title22'>
        <div className='titleText22'>
          <header>Pagina Creare Concediu</header>
        </div>
      </div>
      <body>
        <div className='card'>
          <div className='dataInceperii'>
            {/* Data inceperii:
            <DatePicker selected={dataInceperii} onChange={date => setDataInceperii(date)} /> */}
            {/* <KeyboardDatePicker
              margin='normal'
              id='date-picker-dialog'
              label='Date picker dialog'
              format='MM/dd/yyyy'
              value={dataInceperii}
              onChange={setDataInceperii}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            /> */}
          </div>
          <div className='dataSfarsitului'>
            Data sfarsitului:
            <DatePicker selected={dataSfarsitului} onChange={date => setDataSfarsitului(date)} />
          </div>
          <div className='tipConcediu'>
            <Autocomplete
              options={data}
              id='cmbTipConcediu'
              style={{ width: 300 }}
              getOptionLabel={option => option.name}
              value={option.id}
              renderInput={params => <TextField {...params} label='Tip Concediu' />}
            />
          </div>
          <div className='Inlocuitor'>
            <Autocomplete
              options={data2}
              id='cmbInlocuitor'
              style={{ width: 300 }}
              getOptionLabel={option => option.name}
              value={option.id}
              renderInput={params => <TextField {...params} label='Inlocuitor' />}
            />
          </div>
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
      </body>
    </div>
  )
}

export default CreareConcediu
