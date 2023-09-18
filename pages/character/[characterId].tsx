import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useGetAllCharactersId from '@hooks/useGetAllCharactersId';
import useGetCharacter from '@hooks/useGetCharacter';
import useGetAllEpisodes from '@hooks/useGetAllEpisodes';

import { statusColor } from 'utils';

interface Props {
  character: TCharacter;
  episodes: TEpisode[];
}

const Character = ({ character, episodes }: Props) => {
  if (!character) {
    return null;
  }

  return (
    <>
      <Head>
        <title>NextJS - {character.name}</title>
      </Head>

      <main className='Character'>
        <Link href="/">
          <button className='Character__btn'>Go back to Home</button>
        </Link>

        <div className='Info'>
          <div className='Info__left'>
            <h2 className='Info__left--name'>{character.name}</h2>
            <img className='Info__left--img' src={character.image} />
          </div>

          <div className='Info__right'>
            <div>
              <p className='Info__right--status'><span></span>Status: {character.status}</p>
              <p className='Info__right--origin'>Origin: {character.origin.name}</p>
              <p className='Info__right--gender'>Gender: {character.gender}</p>
              <p className='Info__right--species'>Species: {character.species} {character.type ? ` - ${character.type}` : ''}</p>
            </div>
          </div>
        </div>

        <div className='Episodes'>
          <h3 className='Episodes__title'>Episodes</h3>
          <h4 className='Episodes__appearances'>{episodes.length} Appearances</h4>

          <table className='Episodes__table'>
            <thead>
              <tr>
                <th className='Episodes__table--episode-th'>Episode</th>
                <th className='Episodes__table--name-th'>Name</th>
                <th className='Episodes__table--date-th'>Air date</th>
              </tr>
            </thead>
            <tbody>
              {(episodes).map((episode) => (
                <tr key={`episode-${episode.id}`}>
                  <td className='Episodes__table--episode-td'>{episode.episode}</td>
                  <td className='Episodes__table--name-td'>{episode.name}</td>
                  <td className='Episodes__table--date-td'>{episode.air_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <style jsx>{`
          p.Info__right--status span {
            background-color: ${statusColor(character.status)};
          }
        `}</style>
      </main>
    </>
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
  console.log(episodesInfo);

  return {
    props: {
      character,
      episodes: episodesInfo
    }
  }
}

export default Character;
