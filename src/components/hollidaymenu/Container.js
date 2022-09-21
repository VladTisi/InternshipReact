import React from 'react'
import lista from './data'
import 'assets/css/hollidaylist.css'
import {TableContainer,TablePagination,Table,TableFooter} from '@material-ui/core';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Actions from './Actions';
import TableHeader from './TableHeader';
import TableB from './TableBody';
import HMButtons from './hmButtons';


const cache = createCache({
  key: 'css',
  prepend: true,
});

export default function RenderingArrayOfObjects(){
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(5);
        const [data, setData] = React.useState([])
        React.useEffect(() => {setData(lista)}, [])
          const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0
          const handleChangePage = (event, newPage) => {setPage(newPage)}
          const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(parseInt(event.target.value, 10))
            setPage(0)}
            const prop={emptyRows,rowsPerPage,page,data}
            const prop2={setData,setPage,lista}
    return(
        <CacheProvider value={cache}>
        <TableContainer className="space">
        <Table className="tabela">
          <TableHeader />
            <TableB {...prop}/>
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
        <HMButtons {...prop2}/>
        </TableContainer>
            
        </CacheProvider>
        )
}