// Clase que define la estructura de una reserva hotelera
class Reserva {
  constructor(id, hotel, tipo_habitacion, num_huespedes, fecha_inicio, fecha_fin, estado) {
    this.id = id; // Identificador único
    this.hotel = hotel; // Nombre del hotel
    this.tipo_habitacion = tipo_habitacion; // Tipo de habitación (suite, familiar, etc.)
    this.num_huespedes = num_huespedes; // Número de personas
    this.fecha_inicio = fecha_inicio; // Fecha de inicio de la reserva
    this.fecha_fin = fecha_fin; // Fecha de término de la reserva
    this.estado = estado; // Estado actual (activa, pendiente, cancelada, etc.)
  }
}

export default Reserva;