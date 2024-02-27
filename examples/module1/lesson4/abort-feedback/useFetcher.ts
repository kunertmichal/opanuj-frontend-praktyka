import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from './App';

const API_URL = '/api/data/users?timeout=10000';

export function useUsers(timeout = 5000) {
  const [data, setData] = useState<User[]>();
  const [isTimeoutError, setIsTimeoutError] = useState(false);

  function fetchData() {
    axios
      .get<User[]>(API_URL, { timeout })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          setIsTimeoutError(true);
        }
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function retry() {
    setIsTimeoutError(false);
    fetchData();
  }

  return { data, isTimeoutError, retry };
}
