const fetcher = async (url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  return res.json();
};

export default fetcher;
