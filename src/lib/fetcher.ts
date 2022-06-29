import { API_URL } from 'lib/constants';
const token = process.env.API_KEY;

const fetcher = (query: string, url: string = API_URL) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
    }),
  }).then((res) => res.json());
};

export default fetcher;
