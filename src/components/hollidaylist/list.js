import React from 'react'
import lista from './dummydata'
import 'assets/css/hollidaylist.css'
import { TableContainer,Table} from '@material-ui/core';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import TableFoot from 'components/hollidaymenu/TableFooter';
import TableHeader from 'components/hollidaymenu/TableHeader';
import TableB from 'components/hollidaymenu/TableBody';
import HLButtons from './hlButtons';


const cache = createCache({
  key: 'css',
  prepend: true,
});
export default function ListGetter(){
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(5);
        const [data, setData] = React.useState([]);
        React.useEffect(() => {
            setData(lista.filter(lista=> lista.status=="In Asteptare"));
          }, []);
        const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
        const handleChangePage = (event, newPage) => {
            setPage(newPage);
        };
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        };
        const prop={setData,setPage,lista,emptyRows,rowsPerPage,page,data,handleChangeRowsPerPage,handleChangePage}
    return(
        <CacheProvider value={cache}>
        <TableContainer className="space">
        <Table className="tabela">
            <TableHeader/>
            <TableB {...prop}/>
            <TableFoot {...prop}/>
        </Table>
        </TableContainer>
        <HLButtons {...prop}/>
        </CacheProvider>
    )
}