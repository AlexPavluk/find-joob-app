import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': 'b3aee6db3fmsh0485b4cc2f357e2p1a1af6jsnf8cc8e964a63',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };

      const fetchData = async () => {
        setIsLoading(true);

        try {
          const response = await axios.request(options);
          setData(response.data.data);
          setIsLoading(false);
        } catch (error) {
          setError(error);
          alert('There is an error')
        } finally {
          setIsLoading(false)
        }
      }

      useEffect(()=> {
        fetchData()
      }, [])

      const refresh = () => {
        setIsLoading(true)
        fetchData()
      }

      return { data, isLoading, error, refresh }
}

export default useFetch