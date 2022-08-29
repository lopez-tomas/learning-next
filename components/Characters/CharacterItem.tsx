//import React from 'react'
import Link from 'next/link';

interface Props {
  data: TCharacter;
}

const CharacterItem = ({ data }: Props) => {
  return (
    <div className='ProductItem'>
      <Link href={`/characters/${encodeURIComponent(data.id)}`} passHref>
        <div className='ProductItem-link'>
          <img className='ProductItem-image' src={data.image} alt={data.name} />
          <h2 className='ProductItem-title'>{data.name}</h2>
        </div>
      </Link>
    </div>
  )
}

export default CharacterItem
