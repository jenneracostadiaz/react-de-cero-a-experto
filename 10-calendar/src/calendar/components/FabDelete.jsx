import { useCalendarStore, useUiStore } from '../../hooks';

export const FabDelete = () => {
	const { startDeletingEvent, hasEventSelected } = useCalendarStore();
	const handleDelete = () => {
		startDeletingEvent();
	};

	return (
		<button
			className="btn btn-danger fab fab-danger"
			onClick={handleDelete}
			style={{ display: hasEventSelected ? 'block' : 'none' }}
		>
			<i className="fas fa-trash"></i>
		</button>
	);
};
