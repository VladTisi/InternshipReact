import React from 'react'
import { useTranslation } from 'react-i18next'
import { TableHead,TableRow } from '@material-ui/core'

export default function Head(){
    const {t}=useTranslation()
    return(
        <TableHead className='cap'>
                <TableRow>
                    <th align="center" >{t('EmployeesMenu.Picture')}</th >
                  <th align="center" >{t('EmployeesMenu.Nume')}</th >
                  <th align="center">{t('EmployeesMenu.Prenume')}</th>
                  <th align="center">{t('EmployeesMenu.Functie')}</th>
                </TableRow>
        </TableHead>
    )
}