import React from 'react'
import { Dashboard, PermContactCalendar, FormatListNumbered } from '@material-ui/icons'
import { AddBox } from '@material-ui/icons'

import GroupIcon from '@material-ui/icons/Group'

const menuItems = [{ icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
{icon: <GroupIcon/>, text: 'NavBar.EmployeesMenu', path: '/employeesmenu', name: 'EmployeesMenu'  },
{icon: <PermContactCalendar/>, text: 'NavBar.HollidayMenu', path: '/hollidaymenu', name: 'HollidayMenu'},
{icon: <FormatListNumbered/>, text: 'NavBar.HollidayList', path: '/hollidaylist', name: 'HollidayList'},
{icon:<AddBox />,text:"CreareConcediu",path:"/CreareConcediu",name:"CreareConcediu"}]




export default menuItems
