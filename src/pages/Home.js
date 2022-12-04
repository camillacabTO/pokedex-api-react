import { useFetch } from '../hooks/useFetch';
import PokemonList from '../components/PokemonList';
import styles from './Home.module.scss';
import loader from '../assets/loader.gif';

export default function Home() {
  const {
    error,
    isLoading,
    data: pokemons,
  } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151');

  return (
    <div className={styles.home}>
      {isLoading && (
        <div className='loading'>
          <img src={loader} />
        </div>
      )}
      {error && <div className='error'>{error}</div>}
      {pokemons && <PokemonList pokemons={pokemons} />}
    </div>
  );
}
