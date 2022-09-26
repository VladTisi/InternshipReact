import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'

export default function Mapping(props) {
  try {
    return (
      <TableRow key={props.idAngajatFromAngajat} className='rand'>
        <TableCell style={{ width: 160 }} align='center' className='celula'>
          {props.dataInceput}
        </TableCell>
        <TableCell style={{ width: 160 }} align='center' className='celula'>
          {props.dataSfarsit}
        </TableCell>
        <TableCell style={{ width: 160 }} align='center' className='celula'>
         {"nothing"}
        </TableCell>
      </TableRow>
    )
  } catch (err) {
    console.log(err)
  }
}
