import React from 'react'

export default function SearchBar(props) {
  try {
    const { setSearchTerm } = props
    return (
      <div className='search'>
        <input
          type='text'
          placeholder='Search...'
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
