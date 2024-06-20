import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';
import { PokemonApp } from './PokemonApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <App /> */}
			<PokemonApp />
		</Provider>
	</React.StrictMode>
);
