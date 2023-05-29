import { useState } from 'react';

export const useFetching = (cb) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setIsLoading(true);
      await cb();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, isLoading, error];
};
