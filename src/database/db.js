import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { promisify } from "util"

dotenv.config();

const pool = mysql.createPool(process.env.DB_URI);
pool.query = promisify(pool.query)

async function conectDatabase() {
    try {
        const connection = await pool.getConnection();
        await connection.ping();
        connection.release();
        return true;
    }
    catch (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error('A conexão com o banco de dados foi perdida.');
        }
        else if (err.code === 'ER_CON_COUNT_err') {
            console.error('O banco de dados tem muitas conexões.');
        } else if (err.code === 'ECONNREFUSED') {
            console.error('A conexão com o banco de dados foi recusada.');
        } else {
            console.error('Erro ao conectar no banco de dados:', err.message);
        }
        throw err;
    }
}

export default pool;
export { conectDatabase }