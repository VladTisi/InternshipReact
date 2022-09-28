import React from 'react'
import { TableBody, TableRow, TableCell } from '@material-ui/core'
import PropTypes from 'prop-types'
import Mapping from './Mapping'

export default function TableB(props) {
  const { all, page, rowsPerPage, emptyRows } = props
  return (
    <TableBody>
      {(rowsPerPage > 0 ? all.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : all).map(row => 
        <Mapping key={row.idAngajatFromAngajat} row={row} />)}
      {emptyRows > 0 && (
        <TableRow style={{ height: 55.9 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  )
}
TableB.propTypes = {
  all: PropTypes.array.isRequired,
  emptyRows: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
}
