import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axios.get(url, { signal: controller.signal });
        setError(null);
        setIsLoading(false);
        setData(res.data);
      } catch (error) {
        setIsLoading(false);
        setError(`Error fetching data: ${error.response.data}`);
      }
    };

    setTimeout(() => {
      fetchData();
    }, 1700);

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};
