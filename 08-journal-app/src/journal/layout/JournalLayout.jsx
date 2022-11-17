import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavBar, SideBar } from '../components';

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			{/* Navbar */}
			<NavBar drawerWidth={drawerWidth} />
			{/* Sibebar */}
			<SideBar drawerWidth={drawerWidth} />
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};
