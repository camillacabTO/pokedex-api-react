import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import PokemonDetails from '../components/PokemonDetails';
import loader from '../assets/loader.gif';

export default function PokemonDetailsPage() {
  // grabbing the id from the url to be used in a new request for this specific pokemon details page
  const { id } = useParams();
  const {
    error,
    isLoading,
    data: pokemon,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

  return (
    <div>
      {/* As per the logic in the useFetch isLoading and error will always be False if the data was received with no error. If there was an error, pokemon and loading will become false */}
      {isLoading && (
        <div className='loading'>
          <img src={loader} alt='loading' />
        </div>
      )}
      {error && <div className='error'>{error}</div>}
      {pokemon && <PokemonDetails pokemon={pokemon} />}
    </div>
  );
}
