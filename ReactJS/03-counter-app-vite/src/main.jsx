import React from 'react';
import ReactDOM from 'react-dom/client';

// import { CounterApp } from "./CounterApp";
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CounterApp value={30} />
		{/* <FirstApp
			title="This is a Title"
			subTitle="This is a subtitle"
			nombre="Jenner Acosta"
		/> */}
	</React.StrictMode>
);
