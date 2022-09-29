export const initialState = {
  dataInceperii: new Date(),
  dataSfarsitului: new Date(),
  cmbInlocuitor: null,
  cmbTipConcediu: null,
  dataAngajarii: new Date(),
  nume: null,
  prenume: null,
  idEchipa: 2,
  idFunctie: 2,
  sex: 'M',
  email: null,
  numarTelefon: null,
  salariu: null,
  overtime: null,
  numeechipa: null,
  idFunctieRec: 1,
  idEchipaRec: 1,
  dataAngajariiRec: new Date(),
  dataNasteriiRec: new Date(),
  sexRec: null,
  inlocuitorId: null,
  ZileRamaseOdihna: null,
  ZileRamaseNeplatite: null,
  ZileRamaseMedical: null,
  ZileRamaseDeces: null
}

export function reducer(state, action) {
  let newState
  const { propname, e } = action
  switch (action.type) {
    case 'update':
      newState = { ...state, [action.propname]: action.e }
      break
    case 'fillData':
      newState = { ...state, [action.propname]: e }
      break

    default:
      throw new Error()
  }
  return newState
}
