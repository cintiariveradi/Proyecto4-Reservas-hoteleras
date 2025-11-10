import express from 'express';
import {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  actualizarReserva,
  eliminarReserva,
  filtrarPorHotel,
  filtrarPorFechas,
  filtrarPorTipo,
  filtrarPorEstado,
  filtrarPorHuespedes
} from '../controllers/reservas.controller.js';

const router = express.Router();

/**
 * @swagger
 * /api/reservas:
 *   post:
 *     summary: Crear una nueva reserva
 *     description: Crea una reserva con los datos proporcionados por el usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *               tipoHabitacion:
 *                 type: string
 *               huespedes:
 *                 type: integer
 *               fechaInicio:
 *                 type: string
 *               fechaFin:
 *                 type: string
 *               estado:
 *                 type: string
 *     responses:
 *       201:
 *         description: Reserva creada exitosamente.
 */
router.post('/', crearReserva);

/**
 * @swagger
 * /api/reservas:
 *   get:
 *     summary: Obtener todas las reservas
 *     description: Retorna una lista con todas las reservas almacenadas.
 *     responses:
 *       200:
 *         description: Lista de reservas obtenida exitosamente.
 */
router.get('/', obtenerReservas);

/**
 * @swagger
 * /api/reservas/{id}:
 *   get:
 *     summary: Obtener una reserva por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva encontrada exitosamente.
 *       404:
 *         description: Reserva no encontrada.
 */
router.get('/:id', obtenerReservaPorId);

/**
 * @swagger
 * /api/reservas/{id}:
 *   put:
 *     summary: Actualizar una reserva por ID
 *     description: Permite modificar los datos de una reserva existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hotel:
 *                 type: string
 *               tipoHabitacion:
 *                 type: string
 *               huespedes:
 *                 type: integer
 *               fechaInicio:
 *                 type: string
 *               fechaFin:
 *                 type: string
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Reserva actualizada correctamente.
 *       404:
 *         description: Reserva no encontrada.
 */
router.put('/:id', actualizarReserva);

/**
 * @swagger
 * /api/reservas/{id}:
 *   delete:
 *     summary: Eliminar una reserva por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva eliminada exitosamente.
 *       404:
 *         description: Reserva no encontrada.
 */
router.delete('/:id', eliminarReserva);

/**
 * @swagger
 * /api/reservas/hotel/{nombreHotel}:
 *   get:
 *     summary: Filtrar reservas por nombre de hotel
 *     parameters:
 *       - in: path
 *         name: nombreHotel
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas por hotel.
 */
router.get('/hotel/:nombreHotel', filtrarPorHotel);

/**
 * @swagger
 * /api/reservas/fecha/{fechaInicio}/{fechaFin}:
 *   get:
 *     summary: Filtrar reservas por rango de fechas
 *     parameters:
 *       - in: path
 *         name: fechaInicio
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: fechaFin
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reservas dentro del rango de fechas.
 */
router.get('/fecha/:fechaInicio/:fechaFin', filtrarPorFechas);

/**
 * @swagger
 * /api/reservas/tipo/{tipo}:
 *   get:
 *     summary: Filtrar reservas por tipo de habitación
 *     parameters:
 *       - in: path
 *         name: tipo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas por tipo de habitación.
 */
router.get('/tipo/:tipo', filtrarPorTipo);

/**
 * @swagger
 * /api/reservas/estado/{estado}:
 *   get:
 *     summary: Filtrar reservas por estado
 *     parameters:
 *       - in: path
 *         name: estado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas por estado.
 */
router.get('/estado/:estado', filtrarPorEstado);

/**
 * @swagger
 * /api/reservas/huespedes/{cantidad}:
 *   get:
 *     summary: Filtrar reservas por cantidad de huéspedes
 *     parameters:
 *       - in: path
 *         name: cantidad
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de reservas filtradas por cantidad de huéspedes.
 */
router.get('/huespedes/:cantidad', filtrarPorHuespedes);

export default router;