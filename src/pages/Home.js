import PokemonList from "../components/PokemonList";
import styles from "./Home.module.scss";
import loader from "../assets/loader.gif";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function Home() {
  //using custom hook to fetch the data
  // const {
  //   error,
  //   isLoading,
  //   data: pokemons,
  // } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=60&offset=60');

  const [pageUrl, setPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=60&offset=0"
  );

  const fetchPokemonList = async ({ queryKey }) => {
    const res = await axios.get(queryKey[1]);
    return res.data;
  };

  const {
    isLoading,
    isError,
    data: pokemons,
    error,
  } = useQuery(["pokemons", pageUrl], fetchPokemonList, {
    keepPreviousData: true,
  });
  console.log("previous", pokemons?.previous);

  return (
    <div className={styles.home}>
      {isLoading && (
        <div className="loading">
          <img src={loader} alt="loader" />
        </div>
      )}
      {isError && <div className="error">{error}</div>}
      {pokemons && <PokemonList pokemons={pokemons} />}
      <div>
        {pokemons?.previous && (
          <button onClick={() => setPageUrl((prevState) => pokemons?.previous)}>
            Previous Page
          </button>
        )}
        {pokemons?.next && (
          <button onClick={() => setPageUrl((prevState) => pokemons?.next)}>
            Next Page
          </button>
        )}
      </div>
    </div>
  );
}
