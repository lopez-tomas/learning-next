const URL = process.env.API_URL;

export default async function useGetAllCharacters(url = URL) {
  const response = await fetch(`${url}`);
  const data = await response.json();

  return data;
}
