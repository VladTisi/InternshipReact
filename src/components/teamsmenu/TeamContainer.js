import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Got from './Got';
import 'assets/css/TeamContainer.css'
import BB from './BB';
import SS from './SS';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className='TeamS'>
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