import { Link } from 'react-router-dom';
export const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const heroImage = `/assets/heroes/${id}.jpg`;

	return (
		<div className="col">
			<div className="card">
				<div className="card-header">
					<img
						src={heroImage}
						className="card-img-top rounded mb-2"
						alt={superhero}
					/>
					<h5 className="card-title">{superhero}</h5>
					<h6 className="card-subtitle text-muted">{publisher}</h6>
				</div>
				<div className="card-body">
					<p className="card-text">{alter_ego}</p>
					{alter_ego !== characters && (
						<p className="card-text">{characters}</p>
					)}
					<p className="card-text">
						<small className="text-muted">{first_appearance}</small>
					</p>
					<Link to={`/hero/${id}`}>More...</Link>
				</div>
			</div>
		</div>
	);
};
