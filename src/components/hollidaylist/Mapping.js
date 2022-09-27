import React from 'react'
import { TableRow, TableCell, Checkbox } from '@material-ui/core'
import  PropTypes from 'prop-types'

export default function Mapping(props) {
  const {nume,prenume,functie,dataInceput,dataSfarsit,status}= props
    return (
      <TableRow key={props.id} className='rand'>
        <TableCell>
        <input type="radio" name="radio"/>
        </TableCell>
        <TableCell style={{ width: 180 }} align='center' className='celula'>
          {dataInceput.toString().slice(0, 10)}
        </TableCell>
        <TableCell style={{ width: 180 }} align='center' className='celula'>
          {dataSfarsit.toString().slice(0, 10)}
        </TableCell> 
        <TableCell style={{ width: 160 }} align='center' className='celula'>
          {status}
        </TableCell>
        <TableCell style={{ width: 160 }} align='center' className='celula'>
          {nume}
        </TableCell>
        <TableCell style={{ width: 160 }} align='center' className='celula'>
          {prenume}
        </TableCell>
        <TableCell style={{ width: 160 }} align='center' className='celula'>
          {functie}
        </TableCell>
      </TableRow>
    )
  }
Mapping.propTypes = {
  id: PropTypes.number.isRequired,
  emptyRows: PropTypes.number.isRequired,
  dataInceput: PropTypes.any.isRequired,
  dataSfarsit: PropTypes.any.isRequired,
  functie: PropTypes.string.isRequired,
  nume: PropTypes.string.isRequired,
  prenume: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  setRowId: PropTypes.any.isRequired,
}
