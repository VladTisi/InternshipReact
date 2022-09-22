import MappingBun from 'components/employeesmenu/MappingBun'
import React from 'react'
import PropTypes from 'prop-types'

export default function List(props) {
  const { lista } = props
  return <div style={{ fontSize: 14, marginLeft: -10 }}>{lista.map(row => MappingBun(row))}</div>
}
List.propTypes = {
  lista: PropTypes.object.isRequired
}
