import React from 'react'

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export function Search({ search, setSearch }: Props) {
  console.log(search)

  return (
    <div className='Search'>
      <label className='Search--label' htmlFor='search' />
      <input
        id='search'
        className='Search--input'
        type='search'
        name='search'
        placeholder='Search'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  )
}
