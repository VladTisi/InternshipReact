export const initialState = {
  dataInceperii: new Date(),
  dataSfarsitului: new Date(),
  cmbInlocuitor: null,
  cmbTipConcediu: null
}

export function reducer(state, action) {
  let newState
  const { propname } = action
  switch (action.type) {
    case 'update':
      newState = { ...state, [action.propname]: action.e }
      break
    case 'setDataSfarsitului':
      newState = { ...state, dataSfarsitului: action.e }
      break
    default:
      throw new Error()
  }
  return newState
}
