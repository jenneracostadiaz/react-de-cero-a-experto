const { response } = require('express');
const Evento = require('../models/Evento');

const getEventos = async (req, res = response) => {
	const eventos = await Evento.find().populate('user', 'name');

	res.json({
		ok: true,
		msg: eventos,
	});
};

const crearEventos = async (req, res = response) => {
	const evento = new Evento(req.body);

	try {
		evento.user = req.uid;

		const eventoGuardado = await evento.save();

		res.json({
			ok: true,
			evento: eventoGuardado,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const actualizarEventos = async (req, res = response) => {
	const eventoID = req.params.id;

	try {
		const evento = await Evento.findById(eventoID);

		if (!evento) {
			return res.status(404).json({
				ok: false,
				msg: 'Evento no existe por ese id',
			});
		}

		if (evento.user.toString() !== req.uid) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar este evento',
			});
		}

		const nuevoEvento = {
			...req.body,
			user: req.uid,
		};

		const eventoActualizado = await Evento.findByIdAndUpdate(
			eventoID,
			nuevoEvento,
			{ new: true }
		);

		res.json({
			ok: true,
			evento: eventoActualizado,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const eliminarEventos = async (req, res = response) => {
	const eventoID = req.params.id;

	try {
		const evento = await Evento.findById(eventoID);

		if (!evento) {
			return res.status(404).json({
				ok: false,
				msg: 'Evento no existe por ese id',
			});
		}

		if (evento.user.toString() !== req.uid) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de eliminar este evento',
			});
		}

		await Evento.findByIdAndDelete(eventoID);

		res.json({ ok: true });
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

module.exports = {
	getEventos,
	crearEventos,
	actualizarEventos,
	eliminarEventos,
};
