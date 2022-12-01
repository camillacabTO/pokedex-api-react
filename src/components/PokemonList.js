import { Link } from 'react-router-dom';

export default function PokemonList({ pokemons }) {
  return (
    <div>
      <h1>Pokemon List</h1>
      <p>Check out our Top 151 Pokemons!</p>
      {pokemons.results.map((pokemon, index) => (
        <div key={pokemon.name}>
          <Link to={`/pokemons/${index + 1}`}>{pokemon.name}</Link>
        </div>
      ))}
    </div>
  );
}
