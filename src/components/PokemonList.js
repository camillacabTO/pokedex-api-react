import { Link } from "react-router-dom";
import styles from "./PokemonList.module.scss";
import capitalize from "../utils/capitalize";
import formatID from "../utils/formatID";

export default function PokemonList({ pokemons }) {
  return (
    <>
      <h1>Pokemon List</h1>
      <p>Check out our full list of Pokemons!</p>
      <div className={styles.grid}>
        {/* mapping through the array of pokemons and displaying their name */}
        {pokemons.results.map((pokemon, index) => (
          <div className={styles.item} key={pokemon.name}>
            <Link to={`/pokemons/${formatID(pokemon.url)}`}>
              {capitalize(pokemon.name)}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
