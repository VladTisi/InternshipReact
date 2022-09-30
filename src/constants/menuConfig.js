import React from 'react'
import { Dashboard, PermContactCalendar, FormatListNumbered, GroupWork, ExitToApp } from '@material-ui/icons'
import { AddBox } from '@material-ui/icons'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import GroupIcon from '@material-ui/icons/Group'

const menuItems = [
  { icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
  { icon: <GroupIcon />, text: 'NavBar.EmployeesMenu', path: '/employeesmenu', name: 'EmployeesMenu' },
  { icon: <PermContactCalendar />, text: 'NavBar.HollidayMenu', path: '/hollidaymenu', name: 'HollidayMenu' },
  { icon: <FormatListNumbered />, text: 'NavBar.HollidayList', path: '/hollidaylist', name: 'HollidayList' },
  { icon: <GroupWork />, text: 'NavBar.TeamsMenu', path: '/teamsmenu', name: 'TeamsMenu' },
  { icon: <AddBox />, text: 'NavBar.CreareConcediu', path: '/CreareConcediu', name: 'CreareConcediu' },
  //{ icon: <PersonAddIcon />, text: 'Recrutare', path: '/HirePeople', name: 'Recrutare' },
  { icon: <ExitToApp />, text: 'NavBar.Delogare', path: '/', name: 'Delogare' }
]

export default menuItems
