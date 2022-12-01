import { useFetch } from '../hooks/useFetch';
import PokemonList from '../components/PokemonList';

export default function Home() {
  const {
    error,
    isLoading,
    data: pokemons,
  } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {/* add loading animation */}
      {error && <div>{error}</div>}
      {pokemons && <PokemonList pokemons={pokemons} />}
    </div>
  );
}
