import React, { useReducer } from 'react'
import TextFieldHP from 'components/HirePeople/TextFieldHP.js'
import 'assets/css/hirepeople.css'
import DateTimePicker from '../../components/CreareConcediu/DateTimePicker.js'
import { reducer, initialState } from '../../features/CreareConcediu/reducerHook.js'
import ComboBoxCC from '../../components/CreareConcediu/ComboBoxCC.js'

var data = [
  { id: 0, name: 'Concediu Odihna' },
  { id: 1, name: 'Concediu Maternitate' },
  { id: 2, name: 'Concediu Paternitate' }
]

var sexdata = [
  { id: 'F', name: 'Femeie' },
  { id: 'M', name: 'Barbat' }
]

export default function ContainerHirePeople() {
  const [state, dispatch] = useReducer(reducer, initialState)

  function onChangeHandler(e, propname) {
    dispatch({ type: 'update', e: e, propname: propname })
  }
  return (
    <div className='ContainerHirePeople'>
      <div className='titleHP'>
        <div className='titletextHP'>
          <header> Pagina recrutare</header>
        </div>
      </div>
      <div className='CardHP1'>
        <div className='Nume'>
          Nume: <TextFieldHP whattodisplay={'Nume'}></TextFieldHP>
        </div>
        <div className='Prenume'>
          Prenume: <TextFieldHP whattodisplay={'Prenume'}></TextFieldHP>
        </div>

        <div className='DataAngajariiHP'>
          <DateTimePicker
            label='Data angajarii'
            value={state.dataAngajariiRec}
            onChangeHandler={onChangeHandler}
            func={e => onChangeHandler(e, 'dataAngajariiRec')}
          ></DateTimePicker>
        </div>
        <div className='FunctieRec'>
          <ComboBoxCC
            onChangeHandler={onChangeHandler}
            data={data}
            value={state.idFunctieRec}
            propname='idFunctieRec'
            labelname='Functie'
          ></ComboBoxCC>
        </div>
        <div className='EchipaRec'>
          <ComboBoxCC
            onChangeHandler={onChangeHandler}
            data={data}
            value={state.idFunctieRec}
            propname='idFunctieRec'
            labelname='Echipa'
          ></ComboBoxCC>
        </div>
        <div className='NumarTelefon'>
          Numar telefon: <TextFieldHP whattodisplay={'Telefon'}></TextFieldHP>
        </div>
        <div className='DataNasteriiRec'>
          <DateTimePicker
            label='Data nasterii'
            value={state.dataNasteriiRec}
            onChangeHandler={onChangeHandler}
            func={e => onChangeHandler(e, 'dataNasteriiRec')}
          ></DateTimePicker>
        </div>
        <div className='SexRec'>
          <ComboBoxCC onChangeHandler={onChangeHandler} data={sexdata} value={state.sexRec} propname='sexRec' labelname='Sex'></ComboBoxCC>
        </div>
      </div>

      <div className='CardHP2'></div>
      <div className='CNP'>
        CNP: <TextFieldHP whattodisplay={'CNP'}></TextFieldHP>
      </div>
      <div className='NrBuletinRec'>
        Numar Buletin: <TextFieldHP whattodisplay={'Numar buletin'}></TextFieldHP>
      </div>
    </div>
  )
}
