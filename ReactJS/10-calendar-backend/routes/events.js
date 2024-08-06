/**
 * Rutas de Eventos / Events
 * host + /api/events
 */
const { Router } = require('express');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const {
	getEventos,
	crearEventos,
	actualizarEventos,
	eliminarEventos,
} = require('../controllers/events');

const router = Router();

router.use(validarJWT);

router.get('/', getEventos);

router.post(
	'/',

	[
		check('title', 'El titulo es obligatorio').not().isEmpty(),
		check('start', 'Fecha de inicio es obligatoria').custom(isDate),
		check('end', 'Fecha de finalización es obligatoria').custom(isDate),
		validarCampos,
	],
	crearEventos
);

router.put('/:id', actualizarEventos);

router.delete('/:id', eliminarEventos);

module.exports = router;
