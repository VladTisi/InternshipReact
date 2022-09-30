import React, { useEffect, useState, useReducer } from 'react'
import 'assets/css/userpage.css'
import CreateIcon from '@material-ui/icons/Create'
import MyTextField from '../homepagedata/MyTextField.js'
import ButtonModif from 'components/homepagedata/ButtonModif.js'
import plumi from '../../assets/img/plumeria.png'
import MyTextFieldNume from 'components/homepagedata/MyTextFieldNume.js'
import DatePick from 'components/CreareConcediu/DateTimePicker.js'
import { reducer, initialState } from '../../features/CreareConcediu/reducerHook.js'
import { ApolloProvider, useMutation } from '@apollo/client'
import { LOAD_DATA, ECHIPE, EMAIL, FUNCTII, UPDATE_PERSON } from './QueriesData.js'
import { useQueryWithErrorHandling } from 'hooks/errorHandling.js'
import ComboBoxEchipa from './ComboEchipa.js'
import useUserData from 'components/login/useUserData.js'
import ButtonSave from 'components/homepagedata/buttonSave.js'
import { Get_All } from 'components/employeesmenu/queries.js'
import { TextField } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
var dataEc = [
  { id: 1, nume: 'Ggcfgcfgfnes' },
  { id: 2, nume: 'gcfgcfgcf' },
  { id: 3, nume: 'gcfgcfg' }
]

export default function MyProfileContainers() {
  const userData = useUserData()
  function onChangeHandler(e, propname) {
    dispatch({ type: 'update', e: e, propname: propname })
  }
  const {t}=useTranslation()
  const [updatePerson] = useMutation(UPDATE_PERSON)
  const [state, dispatch] = useReducer(reducer, initialState)
  const { data, loading } = useQueryWithErrorHandling(LOAD_DATA, { variables: { userId: userData.id }, skip: !userData.id })
  const { data: myData, loading: myLoading } = useQueryWithErrorHandling(ECHIPE)
  const [editableField, setEditableField] = useState(false)

  const { data: myDataEmail, loading: myLoadingEmail } = useQueryWithErrorHandling(EMAIL, {
    variables: { emailId: userData.id },
    skip: !userData.id
  })
  const { data: myDataFunctii, loading: myLoadingFunctii } = useQueryWithErrorHandling(FUNCTII)

  const updateHandler = async () => {
    const dataUpdatePerson = await updatePerson({
      variables: {
        input: {
          id: userData.id,
          salariu: parseInt(state.salariu),
          nume: state.nume,
          prenume: state.prenume,
          idEchipa: state.idEchipa,
          idFunctie: state.idFunctie,
          sex: state.sex,
          numarTelefon: state.numarTelefon,
          overtime: parseInt(state.overtime),
          dataAngajarii: state.dataAngajarii
        }
      }
    })
  }

  useEffect(() => {
    if (loading || !data) return

    dispatch({ type: 'fillData', propname: 'sex', e: data.user[0].sex })
    dispatch({ type: 'fillData', propname: 'nume', e: data.user[0].nume })
    dispatch({ type: 'fillData', propname: 'prenume', e: data.user[0].prenume })
    dispatch({ type: 'fillData', propname: 'salariu', e: data.user[0].salariu })
    dispatch({ type: 'fillData', propname: 'overtime', e: data.user[0].overtime })
    dispatch({ type: 'fillData', propname: 'dataAngajarii', e: data.user[0].dataAngajarii })
    dispatch({ type: 'fillData', propname: 'numarTelefon', e: data.user[0].numarTelefon })
    dispatch({ type: 'fillData', propname: 'idEchipa', e: data.user[0].idEchipa })
    dispatch({ type: 'fillData', propname: 'idFunctie', e: data.user[0].idFunctie })
    dispatch({ type: 'fillData', propname: 'poza', e: data.user[0].poza })
  }, [data, loading])

  useEffect(() => {
    if (myLoading || !myData) return
  }, [myData])

  useEffect(() => {
    if (myLoadingEmail || !myDataEmail) return
  }, [myDataEmail])

  useEffect(() => {
    if (myLoadingFunctii || !myDataFunctii) return
  }, [myDataFunctii])

  return (
    <div className='container1'>
      <div className='title'>
        <div className='titletext'>
          <header>{t('MyProfile.PersonalData')}</header>
        </div>
      </div>
      <div>
        <ButtonSave setEditableField={setEditableField}> </ButtonSave>
      </div>
      <body className='corp'>
        <div className='card1'>
          <div className='card1-1'>
            <div>
              <img className='boxImg' src={`data:image/*;base64,${state.poza}`} width='150' height='180' />
            </div>
            <div className='cevrei'>
              <div className='nume-prenume'>
                {t('MyProfile.Nume')}:{' '}
                <MyTextFieldNume
                  onChangeHandler={onChangeHandler}
                  propname={'nume'}
                  whattodisplay={state.nume}
                  editableField={editableField}
                >
                  {' '}
                </MyTextFieldNume>{' '}
              </div>
              <div className='nume-prenume'>
              {t('MyProfile.Prenume')}:{' '}
                <MyTextFieldNume
                  onChangeHandler={onChangeHandler}
                  propname={'prenume'}
                  whattodisplay={state.prenume}
                  editableField={editableField}
                >
                  {' '}
                </MyTextFieldNume>{' '}
              </div>
            </div>
          </div>

          <div className='card1-2'>
            <div className='nume'>
            {t('MyProfile.Echipa')}:
              <ComboBoxEchipa
                editableField={editableField}
                onChangeHandler={onChangeHandler}
                data={myData ? myData.Echipe : dataEc}
                value={state.idEchipa}
                propname='idEchipa'
              ></ComboBoxEchipa>{' '}
            </div>

            <div className='nume'>
            {t('MyProfile.Functie')}:
              <ComboBoxEchipa
                editableField={editableField}
                onChangeHandler={onChangeHandler}
                data={myDataFunctii ? myDataFunctii.Functii : []}
                value={state.idFunctie}
                propname='idFunctie'
              ></ComboBoxEchipa>{' '}
            </div>
            <div className='nume'>
              Sex:{' '}
              <MyTextFieldNume onChangeHandler={onChangeHandler} propname={'sex'} whattodisplay={state.sex} editableField={editableField}>
                {' '}
              </MyTextFieldNume>{' '}
            </div>
          </div>
        </div>

        <div className='card2'>
          <div className='nume'>
            Email:{' '}
            <MyTextFieldNume onChangeHandler={onChangeHandler} whattodisplay={myDataEmail?.email.email}>
              {' '}
            </MyTextFieldNume>{' '}
          </div>
          <div className='nume'>
          {t('MyProfile.NumarTelefon')}:{' '}
            <MyTextFieldNume
              onChangeHandler={onChangeHandler}
              propname={'numarTelefon'}
              whattodisplay={state.numarTelefon}
              editableField={editableField}
            >
              {' '}
            </MyTextFieldNume>{' '}
          </div>
          <div className='txtsod'>
          {t('MyProfile.Salariu')}:{' '}
            <MyTextFieldNume
              onChangeHandler={onChangeHandler}
              propname={'salariu'}
              whattodisplay={state.salariu}
              editableField={editableField}
            >
              {' '}
            </MyTextFieldNume>
          </div>
          <div className='txtsod'>
            Overtime:{' '}
            <MyTextFieldNume
              onChangeHandler={onChangeHandler}
              propname={'overtime'}
              whattodisplay={state.overtime}
              editableField={editableField}
            />
          </div>
          <div className='dataAngajare'>{t('MyProfile.DataAngajare')}:</div>
          <div className='date'>
            {' '}
            {DatePick({
              label: null,
              value: state.dataAngajarii,
              editableField: !editableField,
              func: e => dispatch({ type: 'update', e: e, propname: 'dataAngajarii' })
            })}
          </div>
        </div>
      </body>
      <ButtonModif updateHandler={updateHandler} />
    </div>
  )
}
