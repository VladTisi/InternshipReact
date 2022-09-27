import React, { useState, useEffect } from 'react'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { GET_APROBATE, GET_REFUZATE } from 'components/hollidaymenu/QuerriesHM'
import 'assets/css/hollidaylist.css'
import { TableContainer, Table } from '@material-ui/core'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import TableFoot from 'components/hollidaymenu/TableFooter'
import TableHeader from 'components/hollidaymenu/TableHeader'
import TableB from 'components/hollidaymenu/TableBody'
import HLButtons from './hlButtons'

const cache = createCache({
  key: 'css',
  prepend: true
})
export default function HollidayL() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [state, setState] = useState(null)

  const { data, loading } = useQueryWithErrorHandling(GET_APROBATE, {
    variables: { aprobateId: 2 },
    onCompleted: data => {
      setState(data.aprobate)
    }
  })

  useEffect(() => {
    if (loading || !data) return setState(data?.aprobate)
  }, [data])

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.aprobate.length) : 0
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  const prop = {
    setState,
    setPage,
    aprobate: data ? data.aprobate : [],
    emptyRows,
    rowsPerPage,
    page,
    data,
    handleChangeRowsPerPage,
    handleChangePage
  }
  return (
    <CacheProvider value={cache}>
      <TableContainer>
        <Table className='tabela'>
          <TableHeader />
          <TableB {...prop} />
          <TableFoot {...prop} />
        </Table>
      </TableContainer>
      <HLButtons {...prop} />
    </CacheProvider>
  )
}
