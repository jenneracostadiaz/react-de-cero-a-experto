import { useDispatch, useSelector } from 'react-redux';
import {
	onAddNewEvent,
	onDeleteEvent,
	onLoadEvents,
	onSetActiveEvent,
	onUpdateEvent,
} from '../store';
import calendarApi from '../api/calendarApi';
import { convertEventsToDataEvents } from '../helpers';
import Swal from 'sweetalert2';

export const useCalendarStore = () => {
	const dispatch = useDispatch();

	const { events, activeEvent } = useSelector((state) => state.calendar);
	const { user } = useSelector((state) => state.auth);

	const setActiveEvent = (calendarEvent) => {
		dispatch(onSetActiveEvent(calendarEvent));
	};

	const startSavingEvent = async (calendarEvent) => {
		try {
			if (calendarEvent.id) {
				//Actualizando
				await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
				dispatch(onUpdateEvent({ ...calendarEvent, user }));
				return;
			}
			
			//Creando
			const {data} =  await calendarApi.post('/events', calendarEvent);
			dispatch(onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }));
		} catch (error) {
			console.log('Error', error);
			Swal.fire('Error al guardar', error.response.data.msg, 'error');
		}
	};

	const startDeletingEvent = async() => {
		//Todo: Llegar al backend
		try {
			await calendarApi.delete(`/events/${activeEvent.id}`);
			dispatch(onDeleteEvent(activeEvent.id));
		} catch (error) {
			console.log('Error', error);
			Swal.fire('Error al eliminar', error.response.data.msg, 'error');
		}
	};

	const startLoadingEvents = async () => {
		try{

			const {data} = await calendarApi.get('/events');
			const events = convertEventsToDataEvents(data.msg);
			dispatch(onLoadEvents(events));
		} catch (error) {
			console.log('Error', error);
			console.log(error);
		}
	}

	return {
		// Properties
		events,
		activeEvent,
		hasEventSelected: !!activeEvent,

		//Methods
		startDeletingEvent,
		setActiveEvent,
		startLoadingEvents,
		startSavingEvent,
	};
};
