import React from 'react'
import 'assets/css/hollidaymenu.css'
import {Grid} from '@material-ui/core'
import RenderingArrayOfObjects from 'components/employeesmenu/Container1'




function EmployeesMenu() {

  return (

      <Grid className="container1">
        <RenderingArrayOfObjects />
      </Grid>

    )
  
}

export default EmployeesMenu