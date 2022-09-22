import React, { useState } from 'react';
import Head from './TableHeader';
import {TableBody, Table, TableCell,TableContainer,
TableFooter,TablePagination,TableRow} from '@material-ui/core';
import lista from "./data1"
import { useTranslation } from 'react-i18next'
import 'assets/css/hollidaylist.css' 
import 'assets/css/SearchBar.css'
import Actions from 'components/hollidaymenu/PagActions';
import MappingBun from './MappingBun'

const rows = lista


export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const[searchTerm,setSearchTerm]= useState("");
  return (
    
    <TableContainer  style={{paddingBottom:20}}>
      <div className='search'><input
      type = "text"
      placeholder="Search..."
      onChange={(event)=> {
        setSearchTerm(event.target.value
          )
      }}
      /></div>
      
      <Table className='tabela' aria-label="custom pagination table">
              <Head/>
              <TableBody>

{(rowsPerPage > 0

  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  : rows

).filter((rows)=>{
            if(searchTerm == "")
            {
              return rows
            }
            else if(JSON.stringify(rows.nume).toLowerCase().includes(searchTerm.toLowerCase()))
            {
              return rows 
            }
            
          }).map((rows) => (

  MappingBun(rows)

))}



{emptyRows > 0 && (

  <TableRow style={{ height: 53 * emptyRows }}>

    <TableCell colSpan={6} />

  </TableRow>

)}

</TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={Actions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
