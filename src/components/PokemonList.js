import { Link } from 'react-router-dom';
import styles from './PokemonList.module.scss';

export default function PokemonList({ pokemons }) {
  return (
    <>
      <h1>Pokemon List</h1>
      <p>Check out our Top 151 Pokemons!</p>
      <div className={styles.grid}>
        {pokemons.results.map((pokemon, index) => (
          <div className={styles.item} key={pokemon.name}>
            <Link to={`/pokemons/${index + 1}`}>{pokemon.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
