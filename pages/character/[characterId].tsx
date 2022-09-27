import { useState } from 'react';
import useGetAllCharactersId from '@hooks/useGetAllCharactersId';
import useGetCharacter from '@hooks/useGetCharacter';
import useGetAllEpisodes from '@hooks/useGetAllEpisodes';

import { statusColor } from 'utils';

import styles from './Character.module.sass';

interface Props {
  character: TCharacter;
  episodes: TEpisode[];
}

const Character = ({ character, episodes }: Props) => {
  if (!character) {
    return null;
  }

  return (
    <main className={styles.Character}>
      <div className={styles['Info']}>
        <div className={styles['Info__left']}>
          <h2 className={styles['Info__left--name']}>{character.name}</h2>
          <img className={styles['Info__left--img']} src={character.image} />
        </div>

        <div className={styles['Info__right']}>
          <p><span className={styles['Info__right--status']}></span>Status: {character.status}</p>
          {character.origin.name}<br/>
          {character.gender}<br/>
          {character.species} {character.type ? ` - ${character.type}` : ''}<br/>
        </div>
      </div>

      <div className={styles['Episodes']}>
        <h3 className={styles['Episodes__title']}>Episodes</h3>

        <table className={styles['Episodes__table']}>
          <thead>
            <tr>
              <th className={styles['Episodes__table--episode-th']}>Episode</th>
              <th className={styles['Episodes__table--name-th']}>Name</th>
              <th className={styles['Episodes__table--date-th']}>Air date</th>
            </tr>
          </thead>
          <tbody>
            {(episodes).map((episode) => (
              <tr key={episode.id}>
                <td className={styles['Episodes__table--episode-td']}>{episode.episode}</td>
                <td className={styles['Episodes__table--name-td']}>{episode.name}</td>
                <td className={styles['Episodes__table--date-td']}>{episode.air_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .Info__right--status {
          display: inline-block;
          height: 10px;
          width: 10px;
          margin: 0 .5rem;
          background-color: ${statusColor(character.status)};
          border-radius: 50%;
        }
      `}</style>
    </main>
  )
}

export async function getStaticPaths() {
  const paths = await useGetAllCharactersId();
  return {
    paths,
    fallback: false,
  }
}

interface StaticProps {
  params: { characterId: TCharacter["id"] }
}

export async function getStaticProps({ params }: StaticProps) {
  const character: TCharacter = await useGetCharacter(params.characterId);

  const episodes: TCharacter['episode'] = [];
  character.episode.map(episode => {
    const episodeId = episode.split('/').slice(-1)[0];
    episodes.push(episodeId);
  })

  const query: string = episodes.join();
  const episodesInfo = await useGetAllEpisodes(undefined, `/[${query}]`);

  return {
    props: {
      character,
      episodes: episodesInfo
    }
  }
}

export default Character;
