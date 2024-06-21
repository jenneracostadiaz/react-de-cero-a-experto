import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthenticaction, startGoogleSignIn } from '../../store/auth';
import { signInWithGoogle } from '../../firebase/providers';

export const LoginPage = () => {
	const { status } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const { email, password, onInputChange } = useForm({
		email: 'dev@jenner.pe',
		password: '123456',
	});

	const isAuthenticating = useMemo(() => status === 'checking', [status]);

	const onSubmit = (event) => {
		event.preventDefault();
		console.log({ email, password });
		dispatch(checkingAuthenticaction());
	};

	const onGoogleSignIn = () => {
		dispatch(startGoogleSignIn());
	};

	return (
		<AuthLayout title="Login">
			<form onSubmit={onSubmit}>
				<Grid container>
					<Grid item xs={12} sx={{ mb: 2 }}>
						<TextField
							label="Email"
							type="email"
							placeholder="email@google.com"
							fullWidth
							name="email"
							value={email}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid item xs={12} sx={{ mb: 2 }}>
						<TextField
							label="Password"
							type="password"
							placeholder="********"
							fullWidth
							name="password"
							value={password}
							onChange={onInputChange}
						/>
					</Grid>
					<Grid container spacing={2} sx={{ mb: 2 }}>
						<Grid item xs={12} sm={6}>
							<Button
								disabled={isAuthenticating}
								type="submit"
								variant="contained"
								color="primary"
								fullWidth
							>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Button
								disabled={isAuthenticating}
								variant="contained"
								color="primary"
								fullWidth
								onClick={onGoogleSignIn}
							>
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
