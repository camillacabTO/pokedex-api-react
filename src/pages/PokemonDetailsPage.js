import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import PokemonDetails from '../components/PokemonDetails';
import loader from '../assets/loader.gif';

export default function PokemonDetailsPage() {
  const { id } = useParams();
  const {
    error,
    isLoading,
    data: pokemon,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

  return (
    <div>
      {isLoading && (
        <div className='loading'>
          <img src={loader} alt='loading' />
        </div>
      )}
      {/* add loading animation */}
      {error && <div className='error'>{error}</div>}
      {pokemon && <PokemonDetails pokemon={pokemon} />}
    </div>
  );
}
