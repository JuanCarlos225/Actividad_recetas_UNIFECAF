import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
  timeout: 10000,
});

export async function buscarReceitas(termo = 'chicken') {
  const { data } = await api.get('/search.php', { params: { s: termo } });
  return data.meals ?? [];
}