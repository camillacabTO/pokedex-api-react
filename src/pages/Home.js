import { useFetch } from '../hooks/useFetch';
import PokemonList from '../components/PokemonList';
import styles from './Home.module.scss';
import loader from '../assets/loader.gif';

export default function Home() {
  //using custom hook to fetch the data
  const {
    error,
    isLoading,
    data: pokemons,
  } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');

  return (
    <div className={styles.home}>
      {/* As per the logic in the useFetch isLoading and error will always be False if the data was received with no error. If there was an error, pokemon and loading will become false and the error will be displayed to the user */}
      {isLoading && (
        <div className='loading'>
          {/*While it loads, displays the loader with the delay from the setTimeout to avoid flickering  */}
          <img src={loader} />
        </div>
      )}
      {error && <div className='error'>{error}</div>}
      {pokemons && <PokemonList pokemons={pokemons} />}
    </div>
  );
}
