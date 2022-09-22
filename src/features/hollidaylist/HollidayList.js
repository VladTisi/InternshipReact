import React from 'react'
import { Card } from '@material-ui/core'
import HollidayL from 'components/hollidaylist/Container'
import { useTranslation } from 'react-i18next'

export default function HollidayList(){
    const { t }= useTranslation()
    return(
        <Card className="card-container">
            <h2 className="card-header">{t('EveryonesHollidays')}</h2>
            <HollidayL/>
        </Card>
    )
}