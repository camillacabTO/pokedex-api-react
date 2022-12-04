import { Link } from 'react-router-dom';
import styles from './PokemonList.module.scss';
import capitalize from '../utils/capitalize';

export default function PokemonList({ pokemons }) {
  return (
    <>
      <h1>Pokemon List</h1>
      <p>Check out our Top 151 Pokemons!</p>
      <div className={styles.grid}>
        {/* mapping through the array of pokemons and displaying their name */}
        {pokemons.results.map((pokemon, index) => (
          <div className={styles.item} key={pokemon.name}>
            {/* since there is no id in the array received I used the index from the loop (adding +1), creating an url for each pokemon. This url will redirect the user to the pokemon details page*/}
            <Link to={`/pokemons/${index + 1}`}>
              {capitalize(pokemon.name)}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
