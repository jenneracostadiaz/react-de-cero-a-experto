import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../journal/components';

export const NoteView = () => {
	return (
		<Grid
			container
			direction={'row'}
			justifyContent="space-between"
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography fontSize={39} fontWeight="light">
					28 de agosto, 2024
				</Typography>
			</Grid>
			<Grid item>
				<Button color="primary" sx={{ padding: 2 }}>
					<SaveOutlined sx={{ fontSize: 30 }} />
					Guardar
				</Button>
			</Grid>

			<Grid container>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					placeholder="Un título increíble"
					label="Título"
					sx={{ border: 'none', mb: 1 }}
				/>
				<TextField
					type="text"
					variant="filled"
					fullWidth
					multiline
					placeholder="Qué pasó hoy?"
					minRows={5}
					sx={{ border: 'none', mb: 1 }}
				/>
			</Grid>

			{/* Image gallery */}
			<ImageGallery />
		</Grid>
	);
};
