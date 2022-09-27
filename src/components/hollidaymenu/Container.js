import React, { useEffect, useState } from 'react'
import 'assets/css/hollidaylist.css'
import { TableContainer, Table, Button } from '@material-ui/core'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import TableFoot from './TableFooter'
import TableHeader from './TableHeader'
import TableB from './TableBody'
import HMButtons from './HMButtons'
import { useTranslation } from 'react-i18next'
import { GET_APROBATE } from './QuerriesHM'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'

const cache = createCache({
  key: 'css',
  prepend: true
})

export default function HollidayM() {
  const [state, setState] = useState(null)
  const {t}=useTranslation()
  const { data, loading } = useQueryWithErrorHandling(GET_APROBATE, {
    variables: { aprobateId: 2 },
    onCompleted: data => {
      setState(data.aprobate)
    }
  })

  useEffect(() => {
    if (loading || !data) return setState(data?.aprobate)
  }, [data, loading])
  
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

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
      <div className='buttons-container'>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setState(data?.aprobate.filter(aprobate => aprobate.stareConcediuId == 2))
          setPage(0)
        }}
      >
        {t('Button.Approved')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setState(data?.aprobate.filter(aprobate => aprobate.stareConcediuId == 3))
          setPage(0)
        }}
      >
        {t('Button.Refused')}
      </Button>
      <Button
        className='buttons'
        variant='contained'
        onClick={() => {
          setState(data?.aprobate.filter(aprobate => aprobate.stareConcediuId == 1))
          setPage(0)
        }}
      >
        {t('Button.Pending')}
      </Button>
    </div>
    </CacheProvider>
  )
}
