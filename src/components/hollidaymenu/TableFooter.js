import React from 'react'
import { TablePagination } from '@material-ui/core'
import PropTypes from 'prop-types'
import Actions from './PagActions'
import TableFooter from '@material-ui/core'

export default function TableFoot(props){
    const {data,rowsPerPage,page,handleChangePage,handleChangeRowsPerPage} =props
    return(
        <TableFooter>
        <TablePagination 
                rowsPerPageOptions={[]}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{inputProps: {"aria-label": "rows per page"}}}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={Actions}
            />
        </TableFooter>
    )
}
TableFoot.propTypes={
    data: PropTypes.object.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired,
    handleChangePage: PropTypes.func.isRequired,
}
