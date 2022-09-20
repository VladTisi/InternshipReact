import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import PropTypes from 'prop-types';

const useStyles1 = makeStyles((theme) => ({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }));

 export default function Actions(props) {
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
          
          Actions.propTypes = {
            count: PropTypes.number.isRequired,
            onPageChange: PropTypes.func.isRequired,
            page: PropTypes.number.isRequired,
            rowsPerPage: PropTypes.number.isRequired,
          };