import { useCounter, useFetch } from '../hooks';
import { Loadingmessage } from './Loadingmessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
	const { counter, increment, decrement } = useCounter(1);
	const { data, hasError, isLoading } = useFetch(
		`https://pokeapi.co/api/v2/pokemon/${counter}`
	);

	return (
		<>
			<h1>Multiple Custom Hooks</h1>
			<hr />

			{isLoading ? (
				<Loadingmessage />
			) : hasError ? (
				<div className="alert alert-danger text-center">
					<p>Error: {hasError.error.statusText}</p>
				</div>
			) : (
				<PokemonCard
					id={data.id}
					name={data.name}
					sprites={[
						data.sprites.front_default,
						data.sprites.front_shiny,
						data.sprites.back_default,
						data.sprites.back_shiny,
					]}
				/>
			)}

			<button
				className="btn btn-primary"
				onClick={() => (counter > 1 ? decrement(1) : null)}
			>
				Previous
			</button>
			<button className="btn btn-primary" onClick={() => increment(1)}>
				Next
			</button>
		</>
	);
};
