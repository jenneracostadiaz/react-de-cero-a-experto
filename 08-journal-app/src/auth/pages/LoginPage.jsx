import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
	return (
		<AuthLayout title="Login">
			<form>
				<Grid container>
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
						<Grid item xs={12} sm={6}>
							<Button variant="contained" color="primary" fullWidth>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button variant="contained" color="primary" fullWidth>
								<Google />
								<Typography sx={{ ml: 1 }} variant="button">
									Google
								</Typography>
							</Button>
						</Grid>
					</Grid>
					<Grid container direction="row" justifyContent="end">
						<Link component={RouterLink} color="inherit" to="/auth/register">
							Create an account
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
