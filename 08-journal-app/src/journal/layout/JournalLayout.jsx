import { Box } from '@mui/system';
import React from 'react';
import { NavBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			<NavBar drawerWidth={drawerWidth} />
			{/* Navbar */}
			{/* Sibebar */}
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				{/* Toolbar */}
				{children}
			</Box>
		</Box>
	);
};
