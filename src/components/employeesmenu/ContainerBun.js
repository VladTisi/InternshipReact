import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {TableBody,TableHead, Table, TableCell,TableContainer,
TableFooter,TablePagination,TableRow,IconButton} from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import lista from "./data1"
import { useTranslation } from 'react-i18next'
import 'assets/css/hollidaylist.css' 
import 'assets/css/SearchBar.css'
import MappingBun from './MappingBun'

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),

  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const rows = lista


export default function CustomPaginationActionsTable() {
  const { t } = useTranslation()
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
    
    <TableContainer className='space'>
      <div className='search'><input
      type = "text"
      placeholder="Search..."
      onChange={(event)=> {
        setSearchTerm(event.target.value
          )
      }}
      /></div>
      
      <Table className='tabela' aria-label="custom pagination table">
              <TableHead className='cap'>
                <TableRow>
                  <th align="center" >{t('EmployeesMenu.Nume')}</th >
                  <th align="center">{t('EmployeesMenu.Prenume')}</th>
                  <th align="center">{t('EmployeesMenu.Functie')}</th>
                </TableRow>
              </TableHead>
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
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
