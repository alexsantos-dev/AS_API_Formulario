import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool(process.env.DB_URI);

async function conectDatabase() {
    try {
        const conection = await pool.getConnection();
        await conection.ping();
        conection.release();
        console.log('Conectado ao banco de dados! 🚀🎉');
        return true;
    }
    catch (err) {
        console.error('Falha ao conectar ao banco de dados ;(', err.message);
        throw err;
    }
}

async function execute(query, params = []) {
    try {
        const rows = await pool.query(query, params)
        return [rows];
    }
    catch (err) {
        console.error('Falha ao conectar ao banco de dados! ❌', err.message);
        throw err;
    }
}

export { conectDatabase, pool, execute };