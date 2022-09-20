//import React from 'react'
// import Link from 'next/link';

const capitalizeFirstLetter = (string: string) => string == 'unknown' ? string.charAt(0).toUpperCase() + string.slice(1) : string;

interface Props {
  data: TCharacter;
}

const CharacterItem: React.FC<Props> = ({ data }) => {
  const statusColor = data.status == 'Alive' ? '#55cc44' : data.status == 'Dead' ? '#d63d2e' : 'yellow';

  return (
    <article className='CharacterItem'>
      <img className='CharacterItem-image' src={data.image} alt={data.name} />

      <div className='CharacterItem-data'>
        {/* <Link href={`/characters/${encodeURIComponent(data.id)}`} passHref> */}
        <h2 className='CharacterItem-data--title'>{data.name}</h2>
        {/* </Link> */}

        {data.type
          ?
          <p className='CharacterItem-data--status'>
            <span></span>{capitalizeFirstLetter(data.status)} - {capitalizeFirstLetter(data.species)} ({data.type})
          </p>
          :
          <p className='CharacterItem-data--status'>
            <span></span>{capitalizeFirstLetter(data.status)} - {capitalizeFirstLetter(data.species)}
          </p>
        }

        <div className='CharacterItem-data--extra'>
          <div>
            <span>Last known location: </span><br/>
            <p className='CharacterItem-data--location'>{capitalizeFirstLetter(data.location.name)}</p>
          </div>

          <div>
            <span>Origin: </span><br/>
            <p className='CharacterItem-data--origin'>{capitalizeFirstLetter(data.origin.name)}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .CharacterItem-data--status span {
          background-color: ${statusColor};
        }
      `}</style>
    </article>
  )
}

export default CharacterItem
