import React from 'react'
import {Card} from '@material-ui/core'
import RenderingArrayOfObjects from 'components/employeesmenu/ContainerBun'
import { useTranslation } from 'react-i18next'




function EmployeesMenu() {
  const { t }= useTranslation()
  return (

    <Card className="card-container">
      <h2 className="card-header">{t('EmployeeList')}</h2>
        <RenderingArrayOfObjects />
    </Card>

    )
  
}

export default EmployeesMenu