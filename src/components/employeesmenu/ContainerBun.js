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
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading } = useQueryWithErrorHandling(Get_All, {
    onCompleted: data => {
      setState(data.allemp)
    }
  })

  useEffect(() => {
    if (loading || !data) return setState(data?.allemp)
  }, [data, loading])
  
  
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const prop = { setPage,rowsPerPage, setState, allemp: data ? data.allemp.filter(allemp => allemp.nume.toLowerCase().startsWith(searchTerm.toLowerCase())) : [], page, searchTerm, handleChangePage, handleChangeRowsPerPage }
  const searchProp = { setSearchTerm }
  return (
    <TableContainer  style={{ paddingBottom: 20 }}>
      <SearchBar {...searchProp}/>
      <Table className='tabela' aria-label='custom pagination table'>
        <Head />
        <TableBBun {...prop} />
        <TableFoot {...prop} />
      </Table>
    </TableContainer>
  )
}
