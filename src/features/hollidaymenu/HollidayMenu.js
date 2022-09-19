import React, { Fragment } from 'react'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import 'assets/css/hollidaymenu.css'
import {Grid , Card} from '@material-ui/core'
import { Person } from '@material-ui/icons'
import { IconCard } from '@bit/totalsoft_oss.react-mui.kit.core'
import RenderingArrayOfObjects from 'components/hollidaymenu/Container'



function HollidayMenu() {
  const addToast = useToast()
  addToast('Welcome', 'success')
  return (
      <Grid className="container">
        <RenderingArrayOfObjects />
      </Grid>

    )
  
}

export default HollidayMenu