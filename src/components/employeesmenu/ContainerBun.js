import React, { useState, useEffect } from 'react'
import Head from './TableHeader'
import { Table, TableContainer } from '@material-ui/core'
import TableFoot from './TableFooter'
import TableBBun from './TableBody'
import 'assets/css/hollidaylist.css'
import 'assets/css/SearchBar.css'
import SearchBar from './SearchBox'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { Get_All } from './queries'

export default function CustomPaginationActionsTable() {
  const [state, setState] = useState(null)
  const [searchInput, setSearchInput] = useState("");
  const { data, loading } = useQueryWithErrorHandling(Get_All, {
    onCompleted: data => {
      setState(data.allemp)
    }
  })

  useEffect(() => {
    if (loading || !data) return setState(data?.allemp)
  }, [data])
  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
      data?.allemp.filter((data) => {
       data.allemp.nume.startsWith(searchInput);
  });
  }
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data?.allemp.length - page * rowsPerPage)
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const [searchTerm, setSearchTerm] = useState('')
  const prop = { rowsPerPage, setState, allemp: data ? data.allemp : [], emptyRows, page, searchTerm, handleChangePage, handleChangeRowsPerPage }
  const searchProp = { setSearchTerm }
  return (
    <TableContainer style={{ paddingBottom: 20 }}>
      <input
      type="search"
      placeholder="Search here"
      onChange={handleChange}
      value={searchInput} />
      <Table className='tabela' aria-label='custom pagination table'>
        <Head />
        <TableBBun {...prop} />
        <TableFoot {...prop} />
      </Table>
    </TableContainer>
  )
}
