import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'
import PropTypes from 'prop-types'

export default function Mapping(props) {
  const { row, setRowId } = props

  return (
    <TableRow key={row.id} className='rand'>
      <TableCell>
        <input type='radio' name='radio' onClick={() => setRowId(row.id)} />
      </TableCell>
      <TableCell style={{ width: 180 }} align='center' className='celula'>
        {row.dataInceput.toString().slice(0, 10)}
      </TableCell>
      <TableCell style={{ width: 180 }} align='center' className='celula'>
        {row.dataSfarsit.toString().slice(0, 10)}
      </TableCell>
      <TableCell style={{ width: 160 }} align='center' className='celula'>
        {row.status}
      </TableCell>
      <TableCell style={{ width: 160 }} align='center' className='celula'>
        {row.nume}
      </TableCell>
      <TableCell style={{ width: 160 }} align='center' className='celula'>
        {row.prenume}
      </TableCell>
      <TableCell style={{ width: 160 }} align='center' className='celula'>
        {row.functie}
      </TableCell>
    </TableRow>
  )
}
Mapping.propTypes = {
  row: PropTypes.object,
  setRowId: PropTypes.func.isRequired
}
