import { useState, useEffect } from 'react';
import axios from 'axios';

// Usage of custom hook to extract the logic of fetching data
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // controller is used as a signal in the get request to abort the process in case the component is unmounted before fetching data is completed
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axios.get(url, { signal: controller.signal });
        setError(null);
        setIsLoading(false);
        setData(res.data);
        //updating error and loading once the data is received and no error is thrown
      } catch (error) {
        setIsLoading(false);
        setError(`Error fetching data: ${error.response.data}`);
        // aborting loading and displaying the error message to the user
      }
    };

    setTimeout(() => {
      //using setTimeout to avoid flickering
      fetchData();
    }, 1700);

    return () => {
      //if the component unmounts, abort fetching
      controller.abort();
    };
    //runs useEffect if url changes
  }, [url]);

  return { data, isLoading, error };
  //exposes variables to be used with the logic in the components
};
