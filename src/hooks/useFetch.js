import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();
    setIsLoading(true);
    setIsError(false);

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) throw Error('Could not fetch data from server');

        return res.json();
      })
      .then((data) => {
        setIsError(false);
        setIsLoading(false);
        setData(data);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;

        setIsError(true);
        setIsLoading(false);
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
