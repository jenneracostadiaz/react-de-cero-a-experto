import { createSlice } from '@reduxjs/toolkit';

const tempEvent = {
	_id: '123',
	title: 'My birthday',
	notes: 'It is my birthday today',
	start: new Date('2024-07-17T02:00:00'),
	end: new Date('2024-07-17T14:00:00'),
	bgColor: '#fafafa',
	user: {
		_id: '123',
		name: 'Jenner',
	},
};

export const calendarSlice = createSlice({
	name: 'calendar',
	initialState: {
		events: [tempEvent],
		activeEvent: null,
	},
	reducers: {
		onSetActiveEvent: (state, { payload }) => {
			state.activeEvent = payload;
		},
		onAddNewEvent: (state, { payload }) => {
			state.events.push(payload);
			state.activeEvent = null;
		},
		onUpdateEvent: (state, { payload }) => {
			state.events = state.events.map((event) => {
				if (event._id === payload._id) {
					return payload;
				}
				return event;
			});
		},
		onDeleteEvent: (state) => {
			if (state.activeEvent) {
				state.events = state.events.filter(
					(event) => event._id !== state.activeEvent._id
				);
				state.activeEvent = null;
			}
		},
	},
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } =
	calendarSlice.actions;
