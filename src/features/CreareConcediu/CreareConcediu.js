import React, { useReducer } from 'react'

import ComponentaCreareConcediu from './ComponentaCreareConcediu.js'
import { reducer, initialState } from './reducerHook.js'
function CreareConcediu() {
  const [state, dispatch] = useReducer(reducer, initialState)
  function onChangeHandler(e, propname) {
    dispatch({ type: 'update', e: e, propname: propname })
  }
  return <ComponentaCreareConcediu state={state} onChangeHandler={onChangeHandler}></ComponentaCreareConcediu>
}

export default CreareConcediu
