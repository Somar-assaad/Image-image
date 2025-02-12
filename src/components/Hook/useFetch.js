import { useState,useEffect } from "react";
function useFetch(fetchFn,initialvalue){
    const [userData, setUserData] = useState(initialvalue);
    const [isFetching, setIsFetching] = useState(false);
    const [errorfetch, setErrorfetch] = useState();
 useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setUserData(places);
      } catch (error) {
        setErrorfetch({ message: error.message || 'Failed to fetch user places.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);
  return{
    userData,
    setUserData,
    isFetching,
    errorfetch
  }
}

export default useFetch;