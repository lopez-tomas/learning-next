//import React from 'react';
import CharacterDetail from '@components/Characters/CharacterDetail';
import useGetAllCharactersId from '@hooks/useGetAllCharactersId';
import useGetCharacter from '@hooks/useGetCharacter';

interface Props {
  character: TCharacter;
}

const Character = ({ character }: Props) => {
  if (!character) {
    return null;
  }

  return (
    <div className='Product'>
      Product with ID: {character.id}
      <CharacterDetail data={character} />
    </div>
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
  const character = await useGetCharacter(params.characterId);

  return {
    props: {
      character,
    }
  }
}

export default Character;
