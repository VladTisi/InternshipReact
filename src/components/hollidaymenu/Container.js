import React from 'react'
import lista from './data'
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import 'assets/css/hollidaylist.css'
import { Button,TableContainer,TablePagination,Table, TableBody, TableHead, TableFooter,TableRow, TableCell, IconButton } from '@material-ui/core';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Actions from './TablePagination';
import Mapping from './Mapping';

const cache = createCache({
  key: 'css',
  prepend: true,
});
export default function RenderingArrayOfObjects(){
        const { t } = useTranslation()
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
            <TableHead className="cap">
                        <TableRow>
                            <th>{t('HollidayMenu.Inceput')}</th>
                            <th>{t('HollidayMenu.Sfarsit')}</th>
                            <th>{t('HollidayMenu.Status')}</th>
                        </TableRow>
                    </TableHead>
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
                rowsPerPageOptions={[5, 10]}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {
                    "aria-label": "rows per page"
                }
                 }}
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
            Aprobate
            </Button>
            <Button className="buttons"
              variant="contained"
              onClick={() =>{setData(lista.filter(lista=> lista.status=='Refuzat'));setPage(0)}}>
            Refuzate
            </Button>
            <Button className="buttons"
              variant="contained"
              onClick={() =>{setData(lista.filter(lista=> lista.status=='In Asteptare'));setPage(0)}}>
            In Asteptare
            </Button>
            <Button className="buttons"
              variant="contained"
              onClick={() => {setData(lista);setPage(0)}}>
            Reset Filters
            </Button>
            </div>
        </CacheProvider>
        )

}