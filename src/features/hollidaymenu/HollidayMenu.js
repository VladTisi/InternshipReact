import React from 'react'
import {Card} from '@material-ui/core'
import RenderingArrayOfObjects from 'components/hollidaymenu/Container'
import { useTranslation } from 'react-i18next'
import 'assets/css/hollidaylist.css'



function HollidayMenu() {
  const { t }= useTranslation()
  return (
      <Card className="card-container">
        <h2 className="card-header">{t('PersonalHollidays')}</h2>
        <RenderingArrayOfObjects />
      </Card>

    )
  
}

export default HollidayMenu