import React from 'react'
import { Dashboard, PermContactCalendar } from '@material-ui/icons'
import GroupIcon from '@material-ui/icons/Group'

const menuItems = [{ icon: <Dashboard />, text: 'NavBar.Dashboard', path: '/dashboard', name: 'Dashboard' },
{icon: <GroupIcon/>, text: 'NavBar.EmployeesMenu', path: '/employeesmenu', name: 'EmployeesMenu'  },
{icon: <PermContactCalendar/>, text: 'NavBar.HollidayMenu', path: '/hollidaymenu', name: 'HollidayMenu'  }]



export default menuItems
