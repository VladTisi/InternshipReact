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
import { GET_ALL } from './QuerriesHM'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import useUserData from 'components/login/useUserData'

const cache = createCache({
  key: 'css',
  prepend: true
})

export default function HollidayM() {
  const userData=useUserData()
  const [state, setState] = useState(null)
  const {t}=useTranslation()
  const { data, loading } = useQueryWithErrorHandling(GET_ALL, {
    variables: { allId: userData.id },
    skip: !userData.id,
    onCompleted: data => {
      setState(data.all)
    }
  })

  useEffect(() => {
    if (loading || !data) return setState(data?.all)
  }, [data, loading])
  
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [searchTerm, setSearchTerm] = useState(1);
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data?.all.length) : 0
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  return (
    <CacheProvider value={cache}>
      <TableContainer className="table-container">
        <Table className='tabela'>
          <TableHeader />
          <TableB all={data ? data.all.filter(all=>all.stareConcediuId===(searchTerm)) : []} page={page} rowsPerPage={rowsPerPage} emptyRows={emptyRows} />
          <TableFoot all={data ? data.all.filter(all=>all.stareConcediuId===(searchTerm)) : []} rowsPerPage={rowsPerPage} page={page} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
        </Table>
      </TableContainer>
      <HMButtons setSearchTerm={setSearchTerm}/>
    </CacheProvider>
  )
}
