import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        const data = await res.data;
        setLoading(false);
        setData(data);
      } catch (error) {
        setLoading(false);
        setError('Error retrieving data');
      }
    };
    fetchData();
  }, [url]);
  return [data, loading, error];
};

export default useFetch;
