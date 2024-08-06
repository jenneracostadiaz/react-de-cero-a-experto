import { addHours, differenceInSeconds } from 'date-fns';
import { useEffect, useMemo, useState } from 'react';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import Modal from 'react-modal';
import DatePicker, { registerLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { es } from 'date-fns/locale/es';
import { useCalendarStore, useUiStore } from '../../hooks';

registerLocale('es', es);

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		index: '2000',
	},
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
	const { isDateModalOpen, closeDateModal } = useUiStore();

	const [isOpen, setIsOpen] = useState(true);
	const { activeEvent, startSavingEvent } = useCalendarStore();

	const [formSubmitted, setFormSubmitted] = useState(false);

	const [formValues, setFormValues] = useState({
		title: 'Jenner',
		notes: 'Acosta',
		start: new Date(),
		end: addHours(new Date(), 2),
	});

	useMemo(() => {
		if (!formSubmitted) return '';
		return formValues.title.length < 2 ? 'is-invalid' : '';
	}, [formValues.title, formSubmitted]);

	useEffect(() => {
		if (activeEvent !== null) {
			setFormValues({ ...activeEvent });
		}
	}, [activeEvent]);

	const onCloseModal = () => {
		// console.log('close modal');
		closeDateModal();
	};

	const onInputChanged = ({ target }) => {
		setFormValues({ ...formValues, [target.name]: target.value });
	};

	const onDateChanged = (event, changing) => {
		setFormValues({
			...formValues,
			[changing]: event,
		});
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		setFormSubmitted(true);

		const difference = differenceInSeconds(formValues.end, formValues.start);
		if (isNaN(difference) || difference <= 0) {
			Swal.fire(
				'Error',
				'La fecha fin debe ser mayor a la fecha de inicio',
				'error'
			);
			return;
		}

		if (formValues.title.length < 2) {
			Swal.fire('Error', 'El título es obligatorio', 'error');
			return;
		}

		console.log('Saving event', formValues);

		await startSavingEvent(formValues);
		closeDateModal();
		setFormSubmitted(false);
	};

	return (
		<Modal
			isOpen={isDateModalOpen}
			onRequestClose={onCloseModal}
			style={customStyles}
			className="modal"
			overlayClassName="modal-fondo"
			closeTimeoutMS={200}
		>
			<h1> Nuevo evento </h1>
			<hr />
			<form className="container">
				<div className="form-group mb-2">
					<label>Fecha y hora inicio</label>
					<DatePicker
						selected={formValues.start}
						onChange={(event) => onDateChanged(event, 'start')}
						className="form-control"
						dateFormat="Pp"
						showTimeSelect
						locale="es"
					/>
				</div>

				<div className="form-group mb-2">
					<label>Fecha y hora fin</label>
					<DatePicker
						minDate={formValues.start}
						selected={formValues.end}
						onChange={(event) => onDateChanged(event, 'end')}
						className="form-control"
						dateFormat="Pp"
						showTimeSelect
						locale="es"
					/>
				</div>

				<hr />
				<div className="form-group mb-2">
					<label>Titulo y notas</label>
					<input
						type="text"
						className={`form-control ${!formValues.title && 'is-invalid'}`}
						placeholder="Título del evento"
						name="title"
						autoComplete="off"
						value={formValues.title}
						onChange={onInputChanged}
					/>
					<small id="emailHelp" className="form-text text-muted">
						Una descripción corta
					</small>
				</div>

				<div className="form-group mb-2">
					<textarea
						type="text"
						className="form-control"
						placeholder="Notas"
						rows="5"
						name="notes"
						value={formValues.notes}
						onChange={onInputChanged}
					></textarea>
					<small id="emailHelp" className="form-text text-muted">
						Información adicional
					</small>
				</div>

				<button
					type="submit"
					className="btn btn-outline-primary btn-block"
					onClick={onSubmit}
				>
					<i className="far fa-save"></i>
					<span> Guardar</span>
				</button>
			</form>
		</Modal>
	);
};
