import { useState, useEffect } from 'react'
import useGetAllCharacters from '@hooks/useGetAllCharacters';
import Router from 'next/router';
import Pagination from '@components/Pagination/Pagination';
import CharacterItem from './CharacterItem';

const getPageNumber = (url: Url): number => {
  return Number(url?.split('?page=')[1]);
}

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<TCharacter[]>([]);
  const [info, setInfo] = useState<TInfo | any>({});
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

  const fetchCharacters = async (url: string, page: number = 1) => {
    const data = await useGetAllCharacters(url);
    setCharacters(data.results);
    setInfo(data.info);
    setPage(page);
    Router.push(`/characters?page=${page}`);
  }

  const onPrev = () => {
    fetchCharacters(info.prev, getPageNumber(info.prev));
  }

  const onNext = () => {
    fetchCharacters(info.next, getPageNumber(info.next));
  }

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <div>
      <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
      <div className='ProductsList'>
        {characters.map(character => (
          <CharacterItem key={character.id} data={character} />
        ))}
      </div>
      <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
    </div>
  )
}

export default CharacterList
