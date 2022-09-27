import React, { useEffect, useState, useReducer } from 'react'
import 'assets/css/userpage.css'
import CreateIcon from '@material-ui/icons/Create'
import MyTextField from '../homepagedata/MyTextField.js'
import Button from '@material-ui/core/Button'
import ContainedButtons from 'components/homepagedata/buttonModif.js'
import plumi from '../../assets/img/plumeria.png'
import MyTextFieldNume from 'components/homepagedata/MyTextFieldNume.js'
import DatePick from 'components/CreareConcediu/DateTimePicker.js'
import { reducer,initialState } from '../../features/CreareConcediu/reducerHook.js'
import { ApolloProvider } from '@apollo/client'
import { LOAD_DATA, ECHIPE } from './QueriesData.js'
import { useQueryWithErrorHandling } from 'hooks/errorHandling.js'
import ComboBoxEchipa from './ComboEchipa.js'
import { StateLensProxy } from '@totalsoft/change-tracking-react'
var dataEc = [
  { id: 1, name: 'GameOfThrones' },
  { id: 2, name: 'PrisonBreak' },
  { id: 3, name: 'BreakingBad' }
]

export default  function MyProfileContainers() {

  function onChangeHandler(e, propname) {
    dispatch({ type: 'update', e: e, propname: propname })
  }
  

  const [state, dispatch] = useReducer(reducer, initialState)
  const {data, loading} = useQueryWithErrorHandling(LOAD_DATA, {variables: {userId: 13}})
  const {data:myData ,loading:myLoading} = useQueryWithErrorHandling(ECHIPE)

  
  useEffect (() => {
    if (loading || !data) return;
    
    dispatch({ type: 'fillData', propname:'sex',e:data.user[0].sex})
    dispatch({ type: 'fillData', propname:'nume',e:data.user[0].nume})
    dispatch({ type: 'fillData', propname:'prenume',e:data.user[0].prenume})
    dispatch({ type: 'fillData', propname:'salariu',e:data.user[0].salariu})
    dispatch({ type: 'fillData', propname:'overtime',e:data.user[0].overtime})
    dispatch({ type: 'fillData', propname:'dataAngajarii',e:data.user[0].dataAngajarii})
    dispatch({ type: 'fillData', propname:'numarTelefon',e:data.user[0].numarTelefon})
    dispatch({ type: 'fillData', propname:'idEchipa',e:data.user[0].idEchipa})
    dispatch({ type: 'fillData', propname:'idFunctie',e:data.user[0].idFunctie})
    //dispatch({ type: 'fillData', propname:'email',e:data.user[0].email.email})
      
  },[data]) 

  useEffect (() =>{
    if (myLoading || !myData) return;
    console.log(myData)
   // dispatch({type: 'fillData',propname: 'numeechipa', e:data2.ech})
  },[myData])

  
 
  return (
    <div className='container1'>
      <div className='title'>
        <div className='titletext'>
          <header>Date personale</header>
        </div>
      </div>
      <ContainedButtons>
        <button className='modificare'>
          Modificare date
          <CreateIcon />
        </button>
      </ContainedButtons>
      <body className='corp'>
        <div className='card1'>
          <div className='card1-1'>
            <div>
              <img className='boxImg' src={plumi} width='150' height='180' />
            </div>
            <div className='cevrei'>
              <div className='nume-prenume'>Nume: <MyTextField whattodisplay={state.nume}> </MyTextField>   </div>
              <div className='nume-prenume'>Prenume: <MyTextField whattodisplay={state.prenume}> </MyTextField>  </div>
            </div>
          </div>

          <div className='card1-2'>


            <div className='nume'>Echipa:  
            <ComboBoxEchipa 
                onChangeHandler={onChangeHandler}
                data={myData? myData.Echipe:dataEc}
                value={state.idEchipa}
                propname='cmbEchipa'
              ></ComboBoxEchipa> </div>


            <div className='nume'>Functie: </div>
            <div className='nume'>Sex: <MyTextField whattodisplay={state.sex}> </MyTextField> </div>
          </div>
        </div>

        <div className='card2'>
          
          <div className='nume'>Numar telefon: <MyTextField whattodisplay={state.numarTelefon}> </MyTextField> </div> 
          <div className='txtsod'>Salariu:  <MyTextField whattodisplay={state.salariu}> </MyTextField></div>
          <div className='txtsod'>Overtime:  <MyTextField whattodisplay={state.overtime}> </MyTextField> </div>
          <div className='dataAngajare'>Data angajare:</div>
          <div className='date'>
            {' '}
            {DatePick({
              label: null,
              value: state.dataAngajarii,
              func: e => dispatch({ type: 'update', e: e, propname: 'dataAngajarii' })
            })}
          </div>
        </div>
      </body>
    </div>
  )
}
