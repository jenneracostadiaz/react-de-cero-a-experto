export const PokemonCard = ({ id, name, sprites = [] }) => {
	return (
		<section>
			<p>
				{name} ({id})
			</p>
			<div className="d-flex justify-content-center">
				{sprites.map((sprite, index) => (
					<img
						key={index}
						src={sprite}
						alt={`${name} sprite ${index}`}
						className="img-thumbnail mx-2 my-4"
					/>
				))}
			</div>
		</section>
	);
};
