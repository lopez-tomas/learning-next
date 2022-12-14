const URL = process.env.API_URL_EPISODE;

export default async function useGetAllEpisodes(url = URL, filter = '') {
  const response = await fetch(`${url}/${filter}`);
  const data = await response.json();

  return data;
}
