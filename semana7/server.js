const express = require('express');
const app = express();

// Middleware obligatorio para procesar el cuerpo de las peticiones en formato JSON
app.use(express.json());

// Array en memoria para almacenar los reportes temporalmente
let reportes = [];

// Ruta GET para consultar todos los reportes registrados
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta POST para agregar un nuevo reporte a la lista
app.post('/reportes', (req, res) => {

  const reporte = {
    id: reportes.length + 1, // Genera un ID dinámico según el tamaño del array
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  // Guardamos el objeto dentro de nuestro array
  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });

});

// Inicialización del servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
