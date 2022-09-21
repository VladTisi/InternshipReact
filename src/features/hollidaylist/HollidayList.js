import React from 'react'
import { Card,CardHeader } from '@material-ui/core'
import ListGetter from 'components/hollidaylist/list'
import { useTranslation } from 'react-i18next'

export default function HollidayList(){
    const { t }= useTranslation()
    return(
        <Card className="card-container" style={{paddingBottom:20}}>
            <CardHeader className="card-header" titleTypographyProps={{variant:'h3' , align:'center',fontStyle:"Calibri" }}
        title={t('EveryonesHollidays')}/>
            <ListGetter />
        </Card>
    )
}