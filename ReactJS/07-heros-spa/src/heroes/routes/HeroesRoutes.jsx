import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '..';
import { Navigate, Route, Routes } from 'react-router-dom';
export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />

			<div className="container py-4">
				<Routes>
					<Route path="marvel" element={<MarvelPage />} />
					<Route path="dc" element={<DcPage />} />
					<Route path="search" element={<SearchPage />} />
					<Route path="hero/:id" element={<HeroPage />} />

					<Route path="/" element={<Navigate to="/dc" />} />
				</Routes>
			</div>
		</>
	);
};
