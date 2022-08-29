const API = 'https://rickandmortyapi.com/api/character';

export default async function useGetAllCharacters(url = API) {
  const response = await fetch(`${url}`);
  const data = await response.json();

  return data;
}
