import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    console.log(`url:${url}`);

    fetch(url)
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
        setIsError(true);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
