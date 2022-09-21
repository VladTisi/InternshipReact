import React from 'react'
import lista from './data'
import 'assets/css/hollidaylist.css'
import { Button,TableContainer,TablePagination,Table, TableBody, TableFooter,TableRow, TableCell } from '@material-ui/core';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Actions from './Actions';
import Mapping from './Mapping';
import { useTranslation } from 'react-i18next';
import TableHeader from './TableHeader';

const cache = createCache({
  key: 'css',
  prepend: true,
});
export default function RenderingArrayOfObjects(){
        const { t }= useTranslation()
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(5);
        const [data, setData] = React.useState([])
        React.useEffect(() => {setData(lista)}, [])
          const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0
          const handleChangePage = (event, newPage) => {setPage(newPage)}
          const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(parseInt(event.target.value, 10))
            setPage(0)}
    return(
        <CacheProvider value={cache}>
        <TableContainer className="space">
        <Table className="tabela">
          <TableHeader />
            <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data )
              .map((row) => (Mapping(row)))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 55.9 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
            </TableBody>
            <TableFooter className="tblFoot">
            <TablePagination 
                rowsPerPageOptions={[]}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{inputProps: {"aria-label": "rows per page"}}}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={Actions}
            />
            </TableFooter>
        </Table>
        </TableContainer>
            <div className="buttons-container">
            <Button className="buttons"
              variant="contained"
              onClick={() =>{setData(lista.filter(lista=> lista.status=='Aprobat'));setPage(0)}}>
            {t('Button.Approved')}
            </Button>
            <Button className="buttons"
              variant="contained"
              onClick={() =>{setData(lista.filter(lista=> lista.status=='Refuzat'));setPage(0)}}>
            {t('Button.Refused')}
            </Button>
            <Button className="buttons"
              variant="contained"
              onClick={() =>{setData(lista.filter(lista=> lista.status=='In Asteptare'));setPage(0)}}>
            {t('Button.Pending')}
            </Button>
            <Button className="buttons"
              variant="contained"
              onClick={() => {setData(lista);setPage(0)}}>
            Reset 
            </Button>
            </div>
        </CacheProvider>
        )

}