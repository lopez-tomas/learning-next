const URL = process.env.API_URL;

export default async function useGetAllCharacters(url = URL, filter = '') {
  const response = await fetch(`${url}/${filter}`);
  const data = await response.json();

  return data;
}
