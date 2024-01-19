import pool from "../database/db.js";

async function getAllForms() {
    const [data] = await pool.query("SELECT * FROM dados");
    return data;
}

async function getFormById(id) {
    const [data] = await pool.query('SELECT * FROM dados WHERE id = ?', [id]);
    return data;
}

async function auth(email) {
    const [data] = await pool.query('SELECT email FROM dados WHERE email = ?', [email]);
    return data.length > 0 ? data : null;
}


async function createForm(nome, email, senha, telefone, nascimento, sexo) {
    await pool.query('INSERT INTO dados (nome, email, senha, telefone, nascimento, sexo ) values (?, ?, ?, ?, ?, ?)', [nome, email, senha, telefone, nascimento, sexo]);
}

async function updateForm(id, nome, email, senha, telefone, nascimento, sexo) {
    await pool.query("UPDATE dados set nome = ?, email = ?, senha = ?, telefone = ?, nascimento = ?, sexo = ?  WHERE id = ?", [id, nome, email, senha, telefone, nascimento, sexo]);
}

async function deleteForm(id) {
    await pool.query("DELETE FROM dados WHERE id = ?", [id]);
}

export default {
    getAllForms,
    getFormById,
    auth,
    createForm,
    updateForm,
    deleteForm
}