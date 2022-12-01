import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import PokemonDetails from '../components/PokemonDetails';

export default function PokemonDetailsPage() {
  const { id } = useParams();
  const {
    error,
    isLoading,
    data: pokemon,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {/* add loading animation */}
      {error && <div>{error}</div>}
      {pokemon && <PokemonDetails pokemon={pokemon} />}
    </div>
  );
}
