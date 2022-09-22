import { TableBody,TableRow,TableCell } from '@material-ui/core'
import React from 'react'
import MappingBun from './MappingBun'
import  PropTypes  from 'prop-types'

export default function TableBBun(props){
    const{rowsPerPage,page,data,searchTerm,emptyRows}= props
    return(
        <TableBody>
                  {(rowsPerPage > 0
                    ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : data
                  ).filter((rows)=>{
                              if(searchTerm == "")
                              {
                                return rows
                              }
                              else if(JSON.stringify(rows.nume).toLowerCase().includes(searchTerm.toLowerCase()))
                              {
                                return rows 
                              }
                            }).map((rows) => (MappingBun(rows)))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                  </TableBody>
    )
}
TableBBun.propTypes = {
    data: PropTypes.object.isRequired,
    emptyRows: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    searchTerm: PropTypes.string.isRequired,
  };