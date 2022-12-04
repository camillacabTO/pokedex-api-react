import { useHistory } from 'react-router-dom';
import styles from './PokemonDetails.module.scss';

export default function PokemonDetails({ pokemon }) {
  const history = useHistory();

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div className={styles.detailsContainer}>
      <img src={pokemon.sprites.front_default} alt='pokemon' />
      <h2>{capitalize(pokemon.name)}</h2>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.stats.map((stat) => (
            <tr key={stat.stat.name}>
              <td>{stat.stat.name.toUpperCase()}</td>
              <td>{stat.base_stat}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
}
