import React from 'react'
import { TableHead, TableRow } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

export default function TableHeader() {
  const { t } = useTranslation()
  return (
    <TableHead className='cap'>
      <TableRow>
        <th></th>
        <th>{t('HollidayList.Inceput')}</th>
        <th>{t('HollidayList.Sfarsit')}</th>
        <th>{t('HollidayList.Status')}</th>
        <th>{t('HollidayList.Name')}</th>
        <th>{t('HollidayList.FirstName')}</th>
        <th>{t('HollidayList.Role')}</th>
      </TableRow>
    </TableHead>
  )
}
