# 🏨 PROYECTO 4: Reservas Hoteleras
Este proyecto consiste en el desarrollo de una API REST Backend con Node.js y Express para la gestión de reservas hoteleras.
La aplicación permite realizar operaciones CRUD completas, junto con múltiples filtros de búsqueda para facilitar la administración de reservas.
Las reservas se almacenan en un archivo JSON local, actuando como base de datos temporal.
Además, la API está documentada mediante Swagger (OpenAPI) para despliegue visual simulando un entorno profesional.

## 📁 Estructura de Archivos
```
.
├── src/
│   ├── controllers/       # Lógica de negocio: operaciones CRUD y filtros
│   ├── data/              # Archivo local de datos (reservas.json)
│   ├── models/            # Estructura de modelo para las reservas
│   ├── routes/            # Definición de rutas y documentación con Swagger
│   └── swagger/           # Configuración y especificaciones de Swagger
├── .env                   # Variables de entorno (puerto del servidor)
├── .gitignore             # Exclusión de node_modules y archivos sensibles
├── imagenSwagg.png        # Captura de la documentación Swagger
├── main.js                # Punto de entrada principal del servidor
├── package.json           # Dependencias y scripts de ejecución
├── package-lock.json
├── README.md              # Documentación principal del proyecto
└── Swagger UI.pdf         # Versión en PDF de la documentación Swagger
```



## 🚀 Despliegue
Se utilizó swagger para desplegar visualmente el proyecto de forma local.
Ejemplo de documentación Swagger (local):
http://localhost:3000/api-docs

## 🧩 Endpoints Disponibles
```
.
POST /api/reservas/ .....Crea una nueva reserva.
GET /api/reservas/ ......Obtiene todas las reservas registradas.
Permite aplicar filtros por query string:
hotel
fecha_inicio
fecha_fin
tipo_habitacion
estado
num_huespedes
GET /api/reservas/:id ......Obtiene la información de una reserva específica según su ID.
PUT /api/reservas/:id ......Actualiza los datos de una reserva existente (por ejemplo, cambiar el tipo de habitación o las fechas).
DELETE /api/reservas/:id...... Elimina una reserva específica del sistema.
Filtros adicionales:
GET /api/reservas/hotel/:nombreHotel → Filtra reservas por hotel.
GET /api/reservas/fecha/:fechaInicio/:fechaFin → Filtra por rango de fechas.
GET /api/reservas/tipo/:tipo → Filtra por tipo de habitación.
GET /api/reservas/estado/:estado → Filtra por estado (activa, cancelada, finalizada).
GET /api/reservas/huespedes/:cantidad → Filtra por número de huéspedes.
```


## 🛠 Tecnologías Utilizadas
```
.
Node.js → Entorno de ejecución JavaScript.
Express.js → Framework para la creación del servidor y manejo de rutas.
Swagger UI Express → Documentación interactiva de la API (OpenAPI 3.0).
Swagger JSDoc → Generación automática de documentación a partir del código.
dotenv → Manejo de variables de entorno de forma segura.
fs (File System) → Lectura y escritura de archivos JSON locales.
nodemon → Recarga automática del servidor en modo desarrollo.
Chatgpt → Correcciones e implementación de Swagger
```

## 👀 Pruebas y Herramientas de Verificación
La API fue probada utilizando Swagger UI, disponible en la ruta
http://localhost:3000/api-docs,
donde se ejecutaron los 10 endpoints funcionales y sus filtros asociados.

## 🧠 Autoría
Desarrollado por Cintia Rivera
Proyecto académico para el módulo de Node.js — Reservas Hoteleras (DWFS).
