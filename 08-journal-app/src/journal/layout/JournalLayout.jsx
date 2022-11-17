import { Box } from '@mui/system';
import React from 'react';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			{/* Navbar */}
			{/* Sibebar */}
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				{/* Toolbar */}
				{children}
			</Box>
		</Box>
	);
};
