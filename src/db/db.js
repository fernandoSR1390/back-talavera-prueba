import pg from 'pg';
import dotenv from 'dotenv';
import process from 'node:process';

dotenv.config();
const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USERNAME, // Tu usuario de PostgreSQL
  host: process.env.DB_HOST, // Dirección del servidor de base de datos (cambia si es remoto)
  database: process.env.DB_DATABASE, // El nombre de tu base de datos
  password: process.env.DB_PASSWORD, // Tu contraseña de PostgreSQL
  port: process.env.DB_PORT, // Puerto de PostgreSQL
});

// Verificar la conexión
const testConnection = async () => {
  try {
    // Ejecutar una consulta simple para verificar la conexión
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Conectado a la base de datos PostgreSQL:', res.rows[0].now);
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err.message);
  }
};

// Llamar a la función de prueba de conexión
testConnection();

export default pool;
