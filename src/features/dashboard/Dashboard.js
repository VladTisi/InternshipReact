import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import useUserData from 'components/login/useUserData'

function Dashboard() {
  const smt = useUserData()
  console.log(smt.esteAdmin)

  return (
    <Fragment>
      <Typography></Typography>
      <Grid></Grid>
    </Fragment>
  )
}

export default Dashboard
