import PokemonDetails from "../components/PokemonDetails";
import loader from "../assets/loader.gif";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function PokemonDetailsPage() {
  // grabbing the id from the url to be used in a new request for this specific pokemon details page
  // const { id } = useParams();
  // const {
  //   error,
  //   isLoading,
  //   data: pokemon,
  // } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const { id } = useParams();

  const fetchPokemon = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return res.data;
  };

  const {
    isLoading,
    isError,
    data: pokemon,
    error,
  } = useQuery(["pokemon"], fetchPokemon);

  return (
    <div>
      {/* As per the logic in the useFetch isLoading and error will always be False if the data was received with no error. If there was an error, pokemon and loading will become false */}
      {isLoading && (
        <div className="loading">
          <img src={loader} alt="loading" />
        </div>
      )}
      {isError && <div className="error">{error}</div>}
      {pokemon && <PokemonDetails pokemon={pokemon} />}
    </div>
  );
}
