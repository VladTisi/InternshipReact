import { TableBody,TableRow,TableCell } from '@material-ui/core'
import React from 'react'
import MappingBun from './MappingBun'
import  PropTypes  from 'prop-types'

export default function TableBBun(props) {
  const { rowsPerPage, page, allemp, searchTerm, emptyRows } = props

  return (
    <TableBody>
      {(rowsPerPage > 0 ? allemp.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : allemp).map((row, index) => (
        <MappingBun row={row} key={index}></MappingBun>
      ))}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  )
}
TableBBun.propTypes = {
  allemp: PropTypes.array.isRequired,
  emptyRows: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired
}
