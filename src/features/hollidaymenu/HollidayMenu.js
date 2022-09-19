import React from 'react'
import 'assets/css/hollidaymenu.css'
import {Grid} from '@material-ui/core'
import RenderingArrayOfObjects from 'components/hollidaymenu/Container'



function HollidayMenu() {
  return (
      <Grid className="container">
        <RenderingArrayOfObjects />
      </Grid>

    )
  
}

export default HollidayMenu