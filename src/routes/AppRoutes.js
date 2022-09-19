/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import CustomRoute from '../components/routing/CustomRoute'

import { Forbidden, NotFound } from '@bit/totalsoft_oss.react-mui.kit.core'
import Dashboard from 'features/dashboard/Dashboard'
import HollidayMenu from 'features/hollidaymenu/HollidayMenu'
import EmployeesMenu from 'features/employeesmenu/EmployeesMenu'

export default function AppRoutes() {
  return (
    <Switch>
      <CustomRoute isPrivate={false} exact path='/dashboard' component={Dashboard} />
      <Redirect exact from='/' to='/dashboard' />
      <CustomRoute isPrivate={false} exact path='/employeesmenu' component={EmployeesMenu} />
      <Redirect exact from='/' to='/employeesmenu' />
      <CustomRoute isPrivate={false} exact path='/hollidaymenu' component={HollidayMenu} />
      <Redirect exact from='/' to='/hollidaymenu' />
      <CustomRoute isPrivate={false} exact path='/forbidden' component={Forbidden} />
      <CustomRoute isPrivate={false} render={() => <NotFound title='PageNotFound'></NotFound>} />
    </Switch>
  )
}
