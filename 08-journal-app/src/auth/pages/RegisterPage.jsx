import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
	return (
		<AuthLayout title="Register">
			<form>
				<Grid container>
					<Grid item xs={12} sx={{ mb: 2 }}>
						<TextField
							label="Nombre y Apellido"
							type="text"
							placeholder="Juan Perez"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sx={{ mb: 2 }}>
						<TextField
							label="Email"
							type="email"
							placeholder="email@google.com"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} sx={{ mb: 2 }}>
						<TextField
							label="Password"
							type="password"
							placeholder="********"
							fullWidth
						/>
					</Grid>
					<Grid container spacing={2} sx={{ mb: 2 }}>
						<Grid item xs={12}>
							<Button variant="contained" color="primary" fullWidth>
								Crear Cuenta
							</Button>
						</Grid>
					</Grid>
					<Grid container direction="row" justifyContent="end">
						<Typography sx={{ mr: 1 }}>Ya tienes una cuenta?</Typography>
						<Link component={RouterLink} color="inherit" to="/auth/login">
							Ingresar
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
