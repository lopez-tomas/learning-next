import { useState } from 'react'
import useGetAllCharacters from '@hooks/useGetAllCharacters';

import Pagination from '@components/Pagination/Pagination';
import CharacterItem from './CharacterItem';

interface Props {
  info: TInfo;
  characters: TCharacter[];
}

const CharacterList: React.FC<Props> = ({ info, characters }) => {
  const [page, setPage] = useState(1);
  const [prev, setPrev] = useState<Page>(info.prev);
  const [next, setNext] = useState<Page>(info.next);
  const [currentCharacters, setCurrentCharacters] = useState<TCharacter[]>(characters);

  const fetchCharacters = async (url: Page, page: number = 1) => {
    const data = await useGetAllCharacters(url as string);
    setCurrentCharacters(data.results);
    setPrev(data.info.prev);
    setNext(data.info.next);
    setPage(page);
  }

  const onPrev = () => {
    fetchCharacters(prev, page - 1);
  }

  const onNext = () => {
    fetchCharacters(next, page + 1);
    window.scrollTo(0,0);
  }

  return (
    <>
      <Pagination prev={prev} next={next} onPrev={onPrev} onNext={onNext} />
      <div className='CharacterList'>
        {currentCharacters.map(character => (
          <CharacterItem key={character.id} data={character} />
          ))}
      </div>
      <Pagination prev={prev} next={next} onPrev={onPrev} onNext={onNext} />
    </>
  )
}

export default CharacterList
