import React, { useEffect, useState } from 'react'
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
import { GET_APROBATE, GET_REFUZATE } from './QuerriesHM'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'

const cache = createCache({
  key: 'css',
  prepend: true
})

export default function HollidayM() {
  const [state, setState] = useState(null)

  const { data, loading } = useQueryWithErrorHandling(GET_APROBATE, {
    variables: { aprobateId: 2 },
    onCompleted: data => {
      setState(data.aprobate)
    }
  })

  const { data1, loading1 } = useQueryWithErrorHandling(GET_REFUZATE, {
    variables: { refuzateId: 2 },
    onCompleted: data => {
      setState(data.refuzate)
    }
  })

  useEffect(() => {
    if (loading || !data) return setState(data?.aprobate)
  }, [data])
  useEffect(() => {
    if (loading || !data) return setState(data?.refuzate)
  }, [data])

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  // const [data, setData] = React.useState([])
  // React.useEffect(() => {
  //   setData(lista)
  // }, [])

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
    refuzate: data ? data.refuzate : [],
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
        <HMButtons {...prop} />
      </TableContainer>
    </CacheProvider>
  )
}
