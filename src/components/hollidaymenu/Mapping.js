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
          {(props.stareConcediuId==1 ? "In Asteptare" : props.stareConcediuId==2 ? "Aprobat" : props.stareConcediuId==3 ? "Refuzat": "")}
        </TableCell>
      </TableRow>
    )
  } catch (err) {
    console.log(err)
  }
}
