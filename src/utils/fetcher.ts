import { FetchError } from './FetchError';

const fetcher = async (url: string, init?: RequestInit) => {
  const res = await fetch(url, init);

  if (!res.ok) {
    throw new FetchError(res.statusText, res.status);
  }

  return res.json();
};

export default fetcher;
