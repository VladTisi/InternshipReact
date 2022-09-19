import React from 'react'
import 'assets/css/hollidaymenu.css'
import {Grid } from '@material-ui/core'
import RenderingArrayOfObjects from 'components/employeesmenu/Container'



function EmployeesMenu() {

  return (
      <Grid className="container">
        <RenderingArrayOfObjects />
      </Grid>

    )
  
}

export default EmployeesMenu