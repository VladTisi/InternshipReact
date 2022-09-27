import React, { useEffect, useState, useReducer } from 'react'
import 'assets/css/userpage.css'
import CreateIcon from '@material-ui/icons/Create'
import MyTextField from '../homepagedata/MyTextField.js'
import Button from '@material-ui/core/Button'
import ContainedButtons from 'components/homepagedata/buttonModif.js'
import plumi from '../../assets/img/plumeria.png'
import MyTextFieldNume from 'components/homepagedata/MyTextFieldNume.js'
import DatePick from 'components/CreareConcediu/DateTimePicker.js'
import { reducer } from '../../features/CreareConcediu/reducerHook.js'
import { ApolloProvider } from '@apollo/client'

const initialState = {
  dataAngajarii: new Date()
}
const person = [
  {
    nume: 'Mihai',
    prenume: 'Alin',
    echipa: 'GameOfThrones',
    functie: 'Manager',
    sex: 'M',
    email: 'mihaialin@totalsoft.com',
    nrtelf: '0754585956',
    salariu: 7000,
    overtime: '6h',
    dataAngajare: '10/09/2020',
    poza: 'jhyuhjgfhtg'

  },
  {
    nume: 'Ion',
    prenume: 'Emil',
    echipa: 'GameOfThrones',
    functie: 'DataAnalyst',
    sex: 'M',
    email: 'emilion@totalsoft.com',
    nrtelf: '0778451236',
    salariu: 7000,
    overtime: '3h',
    dataAngajare: '07/11/2021'
  }
]

export default function MyProfileContainers() {
  
  
  const [state, dispatch] = useReducer(reducer, initialState)
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
              <div className='nume-prenume'>Nume: {MyTextFieldNume({ whattodisplay: person[0].nume })}</div>
              <div className='nume-prenume'>Prenume: {MyTextFieldNume({ whattodisplay: person[0].prenume })}</div>
            </div>
          </div>

          <div className='card1-2'>
            <div className='nume'>Echipa: {MyTextField({ whattodisplay: person[0].echipa })}</div>
            <div className='nume'>Functie: {MyTextField({ whattodisplay: person[0].functie })}</div>
            <div className='nume'>Sex: {MyTextField({ whattodisplay: person[0].sex })}</div>
          </div>
        </div>

        <div className='card2'>
          <div className='txtemail'>Email: {MyTextField({ whattodisplay: person[0].email })}</div>

          <div className='nume'>Numar telefon: {MyTextField({ whattodisplay: person[0].nrtelf })}</div>
          <div className='txtsod'>Salariu: {MyTextField({ whattodisplay: person[0].salariu })}</div>
          <div className='txtsod'>Overtime: {MyTextField({ whattodisplay: person[0].overtime })}</div>
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
