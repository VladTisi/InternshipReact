import React from 'react'
import { TableRow, TableCell,Box } from '@material-ui/core'


// var props = [
//   { id: 2, inceput: new Date('2022/02/02'), sfarsit: new Date('2022/03/03'), status: String },
//   { id: 3, inceput: new Date('2022/04/04'), sfarsit: new Date('2022/04/03'), status: String }
// ]



export default function Mapping(props) {
  try {
    return (
          <TableRow key={props.id} className='rand'>
            <TableCell style={{ width: 50, height: 50, margin:0 }} align='center'>
            <Box
              component="img"
              sx={{
                height: 60,
                width: 60,
                maxHeight: { xs: 60, md: 60 },
                maxWidth: { xs: 60, md: 60},
                borderRadius:10,
                margin:0,
              }}
              className="poza"
              alt="The house from the offer."
              src={props.poza}
            />
            </TableCell>
            <TableCell style={{ width: 160 }} align='center'>
              {props.nume}
            </TableCell>
            <TableCell style={{ width: 160 }} align='center'>
              {props.prenume}
            </TableCell>
            <TableCell style={{ width: 160 }} align='center'>
              {props.functie}
            </TableCell>
          </TableRow>
    )
  } catch (err) {
    console.log(err)
  }
}
