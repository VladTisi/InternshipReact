import React from 'react'
import { TableHead, TableRow } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

export default function TableHeader() {
  const { t } = useTranslation()
  return (
    <TableHead className='cap'>
      <TableRow>
        <th>{t('HollidayMenu.Inceput')}</th>
        <th>{t('HollidayMenu.Sfarsit')}</th>
        <th>{t('HollidayMenu.Status')}</th>
      </TableRow>
    </TableHead>
  )
}
