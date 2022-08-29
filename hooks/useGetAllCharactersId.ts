export default async function useGetAllCharactersId() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json();

  let characters = Array.from({length: data.info.count}, (v, k) => {
    return {
      params: {
        productId: `${++k}`
      },
    };
  });

  return characters;
}
