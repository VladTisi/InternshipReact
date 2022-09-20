import React from 'react'
import lista from './dummydata'
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'
import { makeStyles, useTheme} from '@material-ui/core/styles';
import 'assets/css/hollidaylist.css'
import { TableContainer,TablePagination,Table, TableBody, TableHead, TableFooter,TableRow, TableCell, IconButton } from '@material-ui/core';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';



const cache = createCache({
  key: 'css',
  prepend: true,
});
const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));
  
function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className={classes.root}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
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
                ActionsComponent={TablePaginationActions}
            />
            </TableFooter>
        </Table>
        </TableContainer>
        </CacheProvider>
    )
}