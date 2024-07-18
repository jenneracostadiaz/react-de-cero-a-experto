import { useState } from 'react';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {
	CalendarModal,
	NavBar,
	CalendarEvents,
	FabAddNew,
	FabDelete,
} from '../';

import { getMessagesES, localizer } from '../../helpers';
import { useCalendarStore, useUiStore } from '../../hooks';

export const CalendarPage = () => {
	const { openDateModal } = useUiStore();

	const { events, setActiveEvent } = useCalendarStore();

	const [lastView, setLastView] = useState(
		localStorage.getItem('lastView') || 'month'
	);

	const eventStyleGetter = (event, start, end, isSelected) => {
		const style = {
			backgroundColor: '#367CF7',
			opacity: 0.8,
			display: 'block',
			color: 'white',
		};

		return {
			style,
		};
	};

	const onDoubleClick = (event) => {
		openDateModal();
	};

	const onSelect = (event) => {
		// console.log({ click: event });
		setActiveEvent(event);
	};

	const onViewChange = (event) => {
		localStorage.setItem('lastView', event);
	};

	return (
		<>
			<NavBar />

			<Calendar
				culture="es"
				localizer={localizer}
				events={events}
				defaultView={lastView}
				startAccessor="start"
				endAccessor="end"
				style={{ height: 'calc(100vh - 80px)' }}
				messages={getMessagesES()}
				eventPropGetter={eventStyleGetter}
				components={{
					event: CalendarEvents,
				}}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelect}
				onView={onViewChange}
			/>

			<CalendarModal />
			<FabAddNew />
			<FabDelete />
		</>
	);
};
