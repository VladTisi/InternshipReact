import React from 'react'
import { TablePagination, TableFooter } from '@material-ui/core'
import PropTypes from 'prop-types'
import PagActions from './PagActions'

export default function TableFoot(props) {
  const { all, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage } = props
  return (
    <TableFooter>
      <TablePagination
        rowsPerPageOptions={[]}
        count={all.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{ inputProps: { 'aria-label': 'rows per page' } }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={PagActions}
      />
    </TableFooter>
  )
}
TableFoot.propTypes = {
  all: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
  handleChangePage: PropTypes.func.isRequired
}
