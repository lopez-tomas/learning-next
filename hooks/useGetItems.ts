const URL = process.env.MELI_API_URL;

export default async function useGetItems(search = '') {
  const response = await window.fetch(`${URL}?q=${search}`);
  const data = await response.json();

  return data;
}
