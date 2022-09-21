import React from 'react'
import { TableBody,TableRow,TableCell } from '@material-ui/core'
import PropTypes from 'prop-types';
import Mapping from './Mapping';

export default function TableB(props){
    const { data, page, rowsPerPage, emptyRows } = props;
    return(
        <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data )
              .map((row) => (Mapping(row)))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 55.9 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
            </TableBody>
    )
}
TableB.propTypes = {
    data: PropTypes.object.isRequired,
    emptyRows: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };