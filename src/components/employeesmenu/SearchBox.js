import React from 'react'
import { useTranslation } from 'react-i18next'

export default function SearchBar(props) {
  const {t}=useTranslation()
  try {
    const { setSearchTerm } = props
    return (
      <div className='search'>
        <input
          type='text'
          placeholder={t('SearchByName')}
          onChange={event => {
            setSearchTerm(event.target.value)
          }}
        />
      </div>
    )
  } catch (err) {
    console.log(err)
  }
}
