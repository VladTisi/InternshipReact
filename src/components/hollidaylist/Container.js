import React, { useState, useEffect } from 'react'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { GET_ALL } from './QuerriesHL'
import 'assets/css/hollidaylist.css'
import { TableContainer, Table } from '@material-ui/core'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import TableFoot from './TableFooter'
import TableHeader from './TableHeader'
import TableB from './TableBody'
import HLButtons from './hlButtons'

const cache = createCache({
  key: 'css',
  prepend: true
})
export default function HollidayL() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [state, setState] = useState(null)
  const [rowId, setRowId] = useState(0)

  const { data, loading } = useQueryWithErrorHandling(GET_ALL, {
    variables: { concediiId: 13 },
    onCompleted: data => {
      setState(data.concedii)
    }
  })
  useEffect(() => {
    if (loading || !data) return setState(data?.concedii)
  }, [data, loading])

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.concedii.length) : 0
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  console.log(rowId)
  return (
    <CacheProvider value={cache}>
      <TableContainer>
        <Table className='tabela'>
          <TableHeader />
          <TableB concedii={data ? data.concedii : []} page={page} rowsPerPage={rowsPerPage} emptyRows={emptyRows} setRowId={setRowId} />
          <TableFoot concedii={data ? data.concedii : []} rowsPerPage={rowsPerPage} page={page} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
        </Table>
      </TableContainer>
      <HLButtons rowId={rowId} setRowId={setRowId}/>
    </CacheProvider>
  )
}
