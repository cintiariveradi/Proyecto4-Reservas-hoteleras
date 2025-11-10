import fs from 'fs';
import path from 'path';
import Reserva from '../models/reserva.model.js';

// Ruta del archivo JSON donde se guardan las reservas
const filePath = path.join(process.cwd(), 'src/data/reservas.json');

// Leer todas las reservas del archivo
function leerReservas() {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

// Guardar cambios en el archivo JSON
function guardarReservas(reservas) {
  fs.writeFileSync(filePath, JSON.stringify(reservas, null, 2));
}

// Generar un ID incremental que significa el último ID + 1
function generarId() {
  const reservas = leerReservas();
  if (reservas.length === 0) return 1;
  const ids = reservas.map((r) => r.id);
  return Math.max(...ids) + 1;
}

// 1. Crear una nueva reserva
export const crearReserva = (req, res) => {
  const { hotel, tipo_habitacion, num_huespedes, fecha_inicio, fecha_fin, estado } = req.body;

  const reservas = leerReservas();
  const nuevaReserva = new Reserva(
    generarId(),
    hotel,
    tipo_habitacion,
    num_huespedes,
    fecha_inicio,
    fecha_fin,
    estado
  );

  reservas.push(nuevaReserva);
  guardarReservas(reservas);
  res.status(201).json({ mensaje: 'Reserva creada correctamente', data: nuevaReserva });
};

// 2. Obtener todas las reservas
export const obtenerReservas = (req, res) => {
  const reservas = leerReservas();
  res.json(reservas);
};

// 3. Obtener una reserva por ID
export const obtenerReservaPorId = (req, res) => {
  const reservas = leerReservas();
  const reserva = reservas.find((r) => r.id === parseInt(req.params.id));
  if (!reserva) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
  res.json(reserva);
};

// 4. Actualizar una reserva por ID
export const actualizarReserva = (req, res) => {
  const reservas = leerReservas();
  const index = reservas.findIndex((r) => r.id === parseInt(req.params.id));

  if (index === -1) return res.status(404).json({ mensaje: 'Reserva no encontrada' });

  reservas[index] = { ...reservas[index], ...req.body };
  guardarReservas(reservas);
  res.json({ mensaje: 'Reserva actualizada con éxito', data: reservas[index] });
};

// 5. Eliminar una reserva por ID
export const eliminarReserva = (req, res) => {
  let reservas = leerReservas();
  const existe = reservas.some((r) => r.id === parseInt(req.params.id));

  if (!existe) return res.status(404).json({ mensaje: 'Reserva no encontrada' });

  reservas = reservas.filter((r) => r.id !== parseInt(req.params.id));
  guardarReservas(reservas);
  res.json({ mensaje: 'Reserva eliminada correctamente' });
};

// 6. Filtrar por hotel
export const filtrarPorHotel = (req, res) => {
  const { hotel } = req.query;
  const reservas = leerReservas();
  const resultado = reservas.filter((r) => r.hotel.toLowerCase() === hotel.toLowerCase());
  res.json(resultado);
};

// 7. Filtrar por rango de fechas
export const filtrarPorFechas = (req, res) => {
  const { fecha_inicio, fecha_fin } = req.query;
  const reservas = leerReservas();
  const resultado = reservas.filter(
    (r) => r.fecha_inicio >= fecha_inicio && r.fecha_fin <= fecha_fin
  );
  res.json(resultado);
};

// 8. Filtrar por tipo de habitación
export const filtrarPorTipo = (req, res) => {
  const { tipo_habitacion } = req.query;
  const reservas = leerReservas();
  const resultado = reservas.filter(
    (r) => r.tipo_habitacion.toLowerCase() === tipo_habitacion.toLowerCase()
  );
  res.json(resultado);
};

// 9. Filtrar por estado
export const filtrarPorEstado = (req, res) => {
  const { estado } = req.query;
  const reservas = leerReservas();
  const resultado = reservas.filter((r) => r.estado.toLowerCase() === estado.toLowerCase());
  res.json(resultado);
};

// 10. Filtrar por número de huéspedes
export const filtrarPorHuespedes = (req, res) => {
  const { num_huespedes } = req.query;
  const reservas = leerReservas();
  const resultado = reservas.filter(
    (r) => r.num_huespedes === parseInt(num_huespedes)
  );
  res.json(resultado);
};