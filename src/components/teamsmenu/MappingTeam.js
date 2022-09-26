import React from 'react'
import { TableRow, TableCell, Box } from '@material-ui/core'

// var props = [
//   { id: 2, inceput: new Date('2022/02/02'), sfarsit: new Date('2022/03/03'), status: String },
//   { id: 3, inceput: new Date('2022/04/04'), sfarsit: new Date('2022/04/03'), status: String }
// ]

function Mapping(props) {
  const { row } = props
  try {
    return (
      <TableRow key={row.id} className='rand'>
        <TableCell style={{ maxWidth: 100 }} align='center'>
          <Box
            component='img'
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 60, md: 60 },
              maxWidth: { xs: 60, md: 60 },
              borderRadius: 10
            }}
            className='poza'
            alt='The house from the offer.'
            src={`data:image/*;base64,${row.poza}`}
          />
        </TableCell>
        <TableCell style={{ maxWidth: 80 }} align='center'>
          {row.nume + '\n' + row.prenume}
        </TableCell>
        <TableCell style={{ maxWidth: 20 }} align='left'>
          {row.functia}
        </TableCell>
      </TableRow>
    )
  } catch (err) {
    console.log(err)
  }
}
export default Mapping
