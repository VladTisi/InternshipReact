import React from 'react'
import {Card, CardHeader} from '@material-ui/core'
import RenderingArrayOfObjects from 'components/hollidaymenu/Container'
import { useTranslation } from 'react-i18next'



function HollidayMenu() {
  const { t }= useTranslation()
  return (
      <Card className="card-container">
        <CardHeader titleTypographyProps={{fontSize:20 , align:'center', fontFamily: 'Times New Roman' }}
        title={t('PersonalHollidays')}/>
        <RenderingArrayOfObjects />
      </Card>

    )
  
}

export default HollidayMenu