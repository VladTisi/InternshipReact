import React, { Fragment } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import useUserData from 'components/login/useUserData'

function Dashboard() {
  const addToast = useToast()
  const smt = useUserData()
  console.log(smt.esteAdmin)
  addToast('Welcome', 'success')
  return (
    <Fragment>
      <Typography></Typography>
      <Grid></Grid>
    </Fragment>
  )
}

export default Dashboard
