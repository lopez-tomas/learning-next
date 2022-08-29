import React from 'react'

interface Props {
  data: TCharacter
}

const CharacterDetail: React.FC<Props> = ({ data }) => {
  const statusColor = data.status == 'Alive' ? '#55cc44' : data.status == 'Dead' ? '#d63d2e' : 'yellow';

  return (
    <div className="ProductItem">
      <img src={data.image} />
      <h2>{data.name}</h2>
      <p><span className='Character-status'></span>Status: {data.status}</p>

      <style jsx>{`
        .Character-status {
          display: inline-block;
          height: 10px;
          width: 10px;
          margin: 0 .5rem;
          background-color: ${statusColor};
          border-radius: 50%;
        }
      `}</style>
    </div>

  )
}

export default CharacterDetail;
