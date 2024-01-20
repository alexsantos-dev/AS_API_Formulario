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
        if (error.code === "PROTOCOL_CONNECTION_LOST") {
            console.error('A conexão com o banco de dados foi perdida.');
        }
        else if (error.code === 'ER_CON_COUNT_err') {
            console.error('O banco de dados tem muitas conexões.');
        } else if (error.code === 'ECONNREFUSED') {
            console.error('A conexão com o banco de dados foi recusada.');
        } else {
            console.error('Erro ao conectar no banco de dados:', error.message);
        }
        throw error;
    }
}

export default pool;
export { conectDatabase }