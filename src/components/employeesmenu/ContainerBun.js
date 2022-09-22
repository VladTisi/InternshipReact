import React, { useState } from 'react';
import Head from './TableHeader';
import { Table,TableContainer} from '@material-ui/core';
import TableFoot from 'components/hollidaymenu/TableFooter';
import lista from "./data1"
import TableBBun from './TableBody';
import 'assets/css/hollidaylist.css' 
import 'assets/css/SearchBar.css'
import SearchBar from './SearchBox';



const data = lista


export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const[searchTerm,setSearchTerm]= useState(data);

  const handleFilter = input => {

    const value = input.target.value

    const newArray =  data.filter(nou => {
      if (value === '') {
        return nou
      } 
      else {
        return (nou.nume.toLowerCase().includes(value))
      }

    })
    setSearchTerm(newArray);
    return
  }
  const prop={rowsPerPage,data,emptyRows,page,searchTerm,handleChangePage,handleChangeRowsPerPage}
  const searchProp={setSearchTerm}
  return (
    <TableContainer  style={{paddingBottom:20}}>
      <SearchBar{...searchProp}/>
      <Table className='tabela' aria-label="custom pagination table">
          <Head/>
          <TableBBun{...prop}/>
          <TableFoot{...prop}/>
        </Table>
      </TableContainer>
  );
}
