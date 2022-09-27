import { useEffect, useState } from 'react'
import useGetAllCharacters from '@hooks/useGetAllCharacters';

import Pagination from '@components/Pagination/Pagination';
import CharacterItem from '@components/Characters/CharacterItem';
import { Search } from '@components/Search/Search';

interface Props {
  info: TInfo;
  characters: TCharacter[];
}

const Home: React.FC<Props> = ({ info, characters }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [previous, setPrevious] = useState<Page>(info.prev);
  const [next, setNext] = useState<Page>(info.next);
  const [currentCharacters, setCurrentCharacters] = useState<TCharacter[]>(characters);
  const API_URL = 'https://rickandmortyapi.com/api/character';

  const fetchCharacters = async (url: Page, search?: string) => {
    try {
      const data = await useGetAllCharacters(url as string, search);
      setCurrentCharacters(data.results);
      setPrevious(data.info.prev);
      setNext(data.info.next);
      setError(false);
    } catch (err) {
      setError(true);
    }
  }

  const onPrev = () => {
    fetchCharacters(previous);
  }

  const onNext = () => {
    fetchCharacters(next);
    window.scrollTo(0,0);
  }

  useEffect(() => {
    fetchCharacters(API_URL, `/?name=${search}`);
  }, [search]);

  return (
    <main className='Home'>
      <Search search={search} setSearch={setSearch} />

      {!error &&
        <div className='Characters'>
          <Pagination prev={previous} next={next} onPrev={onPrev} onNext={onNext} />
          <div className='CharacterList'>
            {currentCharacters.map(character => (
              <CharacterItem key={character.id} data={character} />
              ))}
          </div>
          <Pagination prev={previous} next={next} onPrev={onPrev} onNext={onNext} />
        </div>
      }
      {error &&
        <div className='Error'>
          <h1 className='Characters--error'>No characters found :(</h1>
        </div>
      }
    </main>
  )
}

export async function getServerSideProps() {
  const data = await useGetAllCharacters();

  return {
    props: {
      info: data.info,
      characters: data.results
    }
  }
}

export default Home;
