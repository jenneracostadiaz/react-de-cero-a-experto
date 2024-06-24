import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothigSelectedView } from '../../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/jornual/thunks';

export const JournalPage = () => {
	const distpatch = useDispatch();

	const { isSaving, active } = useSelector((state) => state.journal);

	const onclickNewNote = () => {
		distpatch(startNewNote());
	};

	return (
		<JournalLayout>
			{/* <NothigSelectedView /> */}
			{/* <NoteView /> */}

			{!!active ? <NoteView /> : <NothigSelectedView />}

			<IconButton
				onClick={onclickNewNote}
				disabled={isSaving}
				size="large"
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.8 },
					position: 'fixed',
					right: 50,
					bottom: 50,
				}}
			>
				<AddOutlined />
			</IconButton>
		</JournalLayout>
	);
};
