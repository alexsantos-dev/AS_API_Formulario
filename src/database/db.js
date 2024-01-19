import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool(process.env.DB_URI);

async function conectDatabase() {
    try {
        const connection = await pool.getConnection();
        await connection.ping();
        connection.release();
        return true;
    }
    catch (error) {
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
        throw error;
    }
}

export default pool;
export { conectDatabase }