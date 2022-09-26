import React, { useReducer } from 'react'
import { gql, useQuery } from '@apollo/client'
import { CONCEDII_QUERY } from './QueriesCC.js'

import ComponentaCreareConcediu from './ComponentaCreareConcediu.js'
import { reducer, initialState } from './reducerHook.js'
function CreareConcediu() {
  //const [data, loading] = useQuery(CONCEDII_QUERY)
//  console.log(data)
  const [state, dispatch] = useReducer(reducer, initialState)
  function onChangeHandler(e, propname) {
    dispatch({ type: 'update', e: e, propname: propname })
  }
  return <ComponentaCreareConcediu state={state} onChangeHandler={onChangeHandler}></ComponentaCreareConcediu>
}

export default CreareConcediu
