import React from 'react'
import Person from '@material-ui/icons/Person'
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const userMenuItems = [{ icon: <Person />, text: 'My Profile', path: '/userPage', name: 'UserPage' },{icon:<VpnKeyIcon />,text:"Change password", path:'/changePassword',name:'Change Password'}];


export default userMenuItems
