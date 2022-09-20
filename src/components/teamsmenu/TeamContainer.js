import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Got from './Got';
import PsBr from './BB';
import 'assets/css/TeamContainer.css'
import BB from './BB';
import SS from './SS';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <div className='myImages'>
        <div className="First_image">
            <Got/>
        </div>
        <div className="Second_image">
            <BB/>
        </div>
        <div className="Third_image">
            <SS/>
        </div>
        </div>
      </Container>
    </React.Fragment>
  );
}