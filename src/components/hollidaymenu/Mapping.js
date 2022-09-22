import React from 'react'
import { TableRow, TableCell} from '@material-ui/core'



export default function Mapping(props) {
  try {
    return (
          <TableRow key={props.id} className='rand'>
            <TableCell style={{ width: 160 }} align='center' className="celula">
              {props.inceput}
            </TableCell>
            <TableCell style={{ width: 160 }} align='center' className="celula">
              {props.sfarsit}
            </TableCell>
            <TableCell style={{ width: 160 }} align='center' className="celula">
              {props.status}
            </TableCell>
          </TableRow>
    )
  } catch (err) {
    console.log(err)
  }
}
