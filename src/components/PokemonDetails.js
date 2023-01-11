import { useHistory } from "react-router-dom";
import styles from "./PokemonDetails.module.scss";
import capitalize from "../utils/capitalize";

export default function PokemonDetails({ pokemon }) {
  const history = useHistory();
  return (
    <div className={styles.detailsContainer}>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
      <h2>{capitalize(pokemon.name)}</h2>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {/* Maps through all stats and creates a row for each with one */}
          {pokemon.stats.map((stat) => (
            <tr key={stat.stat.name}>
              <td>{stat.stat.name.toUpperCase()}</td>
              <td>{stat.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* takes the user back to the last url visited. '/' in this case */}
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
}
