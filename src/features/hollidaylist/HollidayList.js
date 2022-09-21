import React from 'react'
import { Card } from '@material-ui/core'
import ListGetter from 'components/hollidaylist/list'
import { useTranslation } from 'react-i18next'

export default function HollidayList(){
    const { t }= useTranslation()
    return(
        <Card className="card-container" style={{paddingBottom:20}}>
            <h2 className="card-header">{t('EveryonesHollidays')}</h2>
            <ListGetter />
        </Card>
    )
}