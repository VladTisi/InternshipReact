import React, { Fragment } from 'react'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import 'assets/css/userpage.css'
import {Grid , Card} from '@material-ui/core'
import { Person } from '@material-ui/icons'
import { IconCard } from '@bit/totalsoft_oss.react-mui.kit.core'
import RenderingArrayOfObjects from 'components/employeesmenu/Container'
import Containers from 'components/userpage/container'



function SimpleCard() {

  return (
    
     <div className="ContainerUserPage">
        <Containers />
     </div>

    )
  
}

export default SimpleCard