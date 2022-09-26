import React from 'react'
import { TableRow, TableCell, Box } from '@material-ui/core'
import PropTypes from 'prop-types'

// var props = [
//   { id: 2, inceput: new Date('2022/02/02'), sfarsit: new Date('2022/03/03'), status: String },
//   { id: 3, inceput: new Date('2022/04/04'), sfarsit: new Date('2022/04/03'), status: String }
// ]

function Mapping(props) {
  const { row } = props
  return (
    <TableRow key={row.id} className='rand'>
      <TableCell style={{ width: 100 }} align='center'>
        <Box
          component='img'
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 75, md: 75 },
            maxWidth: { xs: 75, md: 75 },
            borderRadius: 10
          }}
          className='poza'
          alt='The house from the offer.'
          src={`data:image/*;base64,${row.poza}`}
        />
      </TableCell>
      <TableCell style={{ width: 160 }} align='center'>
        {row.nume}
      </TableCell>
      <TableCell style={{ width: 160 }} align='center'>
        {row.prenume}
      </TableCell>
      <TableCell style={{ width: 160 }} align='center'>
        {row.functia}
      </TableCell>
    </TableRow>
  )
}
Mapping.propTypes = {
  row: PropTypes.object.isRequired
}

export default Mapping
