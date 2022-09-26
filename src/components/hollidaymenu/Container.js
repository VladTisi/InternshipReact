import React from 'react'
import lista from './data'
import 'assets/css/hollidaylist.css'
import { TableContainer, Table } from '@material-ui/core'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import TableFoot from './TableFooter'
import TableHeader from './TableHeader'
import TableB from './TableBody'
import HMButtons from './HMButtons'
import { useReducer } from 'react'
import { reducer } from 'features/CreareConcediu/reducerHook'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { GET_ALL } from './QuerriesHM'

const cache = createCache({
  key: 'css',
  prepend: true
})


export default function HollidayM() {
  var a= useQueryWithErrorHandling(GET_ALL, {variables: {allId : 2}})
  const lista=a.data.all
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    setData(lista)
  }, [])
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
 
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const prop = {  setData, setPage, all: data ? data.all : [], emptyRows, rowsPerPage, page, data, handleChangeRowsPerPage, handleChangePage }
  return (
    <CacheProvider value={cache}>
      <TableContainer>
        <Table className='tabela'>
          <TableHeader />
          <TableB {...prop} />
          <TableFoot {...prop} />
        </Table>
        <HMButtons {...prop} />
      </TableContainer>
    </CacheProvider>
  )
}
