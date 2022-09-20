import React from 'react'
import lista from './dummydata'
import { useTranslation } from 'react-i18next'
import 'assets/css/hollidaylist.css'
import { TableContainer,TablePagination,Table, TableBody, TableHead, TableFooter,TableRow, TableCell } from '@material-ui/core';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';


const cache = createCache({
  key: 'css',
  prepend: true,
});
export default function ListGetter(){
        const { t } = useTranslation()
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(5);

        const [data, setData] = React.useState([]);
        React.useEffect(() => {
          
            setData(lista);
          }, []);
          const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;
        const handleChangePage = (event, newPage) => {
            setPage(newPage);
          };
          
          const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          };
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
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
              <TableRow key={row.id} className="rand">
                <TableCell style={{ width: 160 }} align="center">
                  {row.inceput}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.sfarsit}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.status}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
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
                //ActionsComponent={TablePaginationActions}
                //component={Box}
                labelDisplayedRows={({ page }) => {
                return `Page: ${page}`;
                }}
                backIconButtonProps={{
                    color: "secondary"
                }}
                nextIconButtonProps={{ color: "secondary" }}
                showFirstButton={true}
                showLastButton={true}
                labelRowsPerPage={<span>Rows:</span>}
                sx={{
                    ".MuiTablePagination-toolbar": {
                    backgroundColor: "rgba(100,100,100,0.5)"
                    },
                    ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
                    fontWeight: "bold",
                    color: "blue"
                    }
                }}
            />
            </TableFooter>
        </Table>
        </TableContainer>
        </CacheProvider>
    )
}