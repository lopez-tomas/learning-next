const URL = process.env.API_URL_CHARACTER;

export default async function useGetCharacter(id: TCharacter["id"]) {
  const response = await fetch(`${URL}/${id}`);
  const data = await response.json();

  return data;
}
