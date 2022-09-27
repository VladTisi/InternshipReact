import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'

export default function Mapping(props) {
  try {
    return (
      <TableRow key={props.idAngajatFromAngajat} className='rand'>
        <TableCell style={{ width: 160 }} align='center' className='celula'>
          {props.dataInceput.toString().slice(0, 10)}
        </TableCell>
        <TableCell style={{ width: 160 }} align='center' className='celula'>
          {props.dataSfarsit.toString().slice(0, 10)}
        </TableCell>
        <TableCell style={{ width: 160 }} align='center' className='celula'>
          {props.status}
        </TableCell>
      </TableRow>
    )
  } catch (err) {
    console.log(err)
  }
}
