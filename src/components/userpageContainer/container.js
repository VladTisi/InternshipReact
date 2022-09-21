import React from 'react'
import 'assets/css/userpage.css'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import CreateIcon from '@material-ui/icons/Create'
import MyTextField from '../../components/homepagedata/myTextField.js'

// const person = [{nume: 'Mihai', prenume: 'Alin', echipa: 'GameOfThrones', functie: 'Manager', sex: 'M', email: 'mihaialin@totalsoft.com', nrtelf: 0754585956, salariu: 7000, overtime: '6h', dataAngajare: '10/09/2020'},{nume: 'Ion', prenume: 'Emil', echipa: 'GameOfThrones', functie: 'DataAnalyst', sex: 'M', email: 'emilion@totalsoft.com', nrtelf: 0778451236, salariu: 7000, overtime: '3h', dataAngajare: '07/11/2021'} ]
// person.forEach(obj=> {
//       .... obj.name
// })

export default function MyProfileContainers() {
  return (
    <div className='container1'>
      <div className='title'>
        <div className='titletext'>
          <header>Date personale</header>
        </div>
      </div>
      <body className='corp'>
        <div className='card1'>
          <div className='nume'>
            Nume: <MyTextField></MyTextField>
          </div>
          <div className='nume'>
            Prenume: <MyTextField></MyTextField>
          </div>
          <div className='nume'>
            Echipa: <MyTextField></MyTextField>
          </div>
          <div className='nume'>
            Functie: <MyTextField></MyTextField>
          </div>
          <div className='nume'>
            Sex: <MyTextField></MyTextField>
          </div>
        </div>

        <div className='card2'>
          <div className='nume'>
            Email: <MyTextField></MyTextField>
          </div>
          <div className='nume'>
            Numar telefon: <MyTextField></MyTextField>
          </div>
          <div className='nume'>
            Salariu: <MyTextField></MyTextField>
          </div>
          <div className='nume'>
            Overtime: <MyTextField></MyTextField>
          </div>
          <div className='nume'>
            Data angajare: <MyTextField></MyTextField>
          </div>
        </div>
      </body>
      <button className='modificare'>
        Modificare date
        <CreateIcon />
      </button>
    </div>
  )
}
