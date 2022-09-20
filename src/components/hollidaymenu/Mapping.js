import React from 'react'
import { TableRow, TableCell } from '@material-ui/core'

// var props = [
//   { id: 2, inceput: new Date('2022/02/02'), sfarsit: new Date('2022/03/03'), status: String },
//   { id: 3, inceput: new Date('2022/04/04'), sfarsit: new Date('2022/04/03'), status: String }
// ]



export default function Mapping(props) {
  try {
    return (
          <TableRow key={props.id} className='rand'>
            <TableCell style={{ width: 160 }} align='center'>
              {props.inceput}
            </TableCell>
            <TableCell style={{ width: 160 }} align='center'>
              {props.sfarsit}
            </TableCell>
            <TableCell style={{ width: 160 }} align='center'>
              {props.status}
            </TableCell>
          </TableRow>
    )
  } catch (err) {
    console.log(err)
  }
}
