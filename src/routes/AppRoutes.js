/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import CustomRoute from '../components/routing/CustomRoute'

import { Forbidden, NotFound } from '@bit/totalsoft_oss.react-mui.kit.core'
import Dashboard from 'features/dashboard/Dashboard'
import creareConcediu from 'features/CreareConcediu/CreareConcediu'
import HollidayMenu from 'features/hollidaymenu/HollidayMenu'
import EmployeesMenu from 'features/employeesmenu/EmployeesMenu'
import UserPage from 'features/userPage/UserPage'
import HollidayList from 'features/hollidaylist/HollidayList'
import TeamsMenu from 'features/teamsmenu/TeamsMenu'
import ChangePassword from 'features/ChangePassword/changepassword.js'
import HirePeople from 'features/HirePeople/HirePeople.js'
import LoginPage from 'components/login/LoginPage'
export default function AppRoutes() {
  return (
    <Switch>
      <CustomRoute isPrivate={false} exact path='/dashboard' component={Dashboard} />
      <Redirect exact from='/' to='/dashboard' />
      <CustomRoute isPrivate={false} exact path='/CreareConcediu' component={creareConcediu} />
      <Redirect exact from='/' to='/CreareConcediu' />
      <CustomRoute isPrivate={false} exact path='/employeesmenu' component={EmployeesMenu} />
      <Redirect exact from='/' to='/employeesmenu' />
      <CustomRoute isPrivate={false} exact path='/hollidaymenu' component={HollidayMenu} />
      <Redirect exact from='/' to='/hollidaymenu' />
      <CustomRoute isPrivate={false} exact path='/userPage' component={UserPage} />
      <Redirect exact from='/' to='/userPage' />
      <CustomRoute isPrivate={false} exact path='/changePassword' component={ChangePassword} />
      <Redirect exact from='/' to='/changePassword' />
      <CustomRoute isPrivate={false} exact path='/hollidaylist' component={HollidayList} />
      <Redirect exact from='/' to='/hollidaylist' />
      <CustomRoute isPrivate={false} exact path='/teamsmenu' component={TeamsMenu} />
      <Redirect exact from='/' to='/teamsmenu' />
      <CustomRoute isPrivate={false} exact path='/HirePeople' component={HirePeople} />
      <Redirect exact from='/' to='/HirePeople' />
      {/* <CustomRoute isPrivate={false} exact path='/MenuItems' component={UserPage} /> */}
      <CustomRoute isPrivate={false} exact path='/forbidden' component={Forbidden} />
      <CustomRoute isPrivate={false} render={() => <NotFound title='PageNotFound'></NotFound>} />
    </Switch>
  )
}
