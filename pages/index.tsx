import CharacterList from '@components/Characters/CharacterList';
import useGetAllCharacters from '@hooks/useGetAllCharacters';

interface Props {
  info: TInfo;
  characters: TCharacter[];
}

const Home: React.FC<Props> = ({ info, characters }) => {
  return (
    <main className='Home'>
      <h1 className='Home-title'>HOME</h1>
      <div className='Characters'>
        <CharacterList info={info} characters={characters} />
      </div>
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
