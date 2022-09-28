import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'
import PropTypes  from 'prop-types'
export default function Mapping(props) {
  const { row }= props
    return (
      <TableRow key={row.idAngajatFromAngajat} className='rand'>
        <TableCell style={{ width: 160 }} align='center' className='celula'>
          {row.dataInceput.toString().slice(0, 10)}
        </TableCell>
        <TableCell style={{ width: 160 }} align='center' className='celula'>
          {row.dataSfarsit.toString().slice(0, 10)}
        </TableCell> 
        <TableCell style={{ width: 160 }} align='center' className='celula'>
          {(row.stareConcediuId==1 ? "In Asteptare" : row.stareConcediuId==2 ? "Aprobat" : row.stareConcediuId==3 ? "Refuzat": "")}
        </TableCell>
      </TableRow>
    )
}
Mapping.propTypes = {
  row: PropTypes.object,
}
