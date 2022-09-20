import React from 'react'
import 'assets/css/hollidaymenu.css'
import {Grid} from '@material-ui/core'
import RenderingArrayOfObjects from 'components/employeesmenu/ContainerBun'




function EmployeesMenu() {

  return (

      <Grid className="containerbun">
        <RenderingArrayOfObjects />
      </Grid>

    )
  
}

export default EmployeesMenu