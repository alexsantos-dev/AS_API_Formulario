import pool from "../database/db.js";

async function getAllForms() {
    const [data] = await pool.query("SELECT * FROM dados");
    return data;
}

async function getFormById(id) {
    const [data] = await pool.query('SELECT * FROM dados WHERE id = ?', [id]);
    return data;
}

async function createForm(nome, email, telefone, nascimento, sexo) {
    await pool.query('INSERT INTO dados (nome, email, telefone, nascimento, sexo ) values (?, ?, ?, ?, ?)', [nome, email, telefone, nascimento, sexo]);
}

async function updateForm(id, nome, email, telefone, nascimento, sexo) {
    await pool.query("UPDATE dados set nome = ?, email = ?, telefone = ?, nascimento = ?, sexo = ?  WHERE id = ?", [id, nome, email, telefone, nascimento, sexo]);
}

async function deleteForm(id) {
    await pool.query("DELETE FROM dados WHERE id = ?", [id]);
}

export default {
    getAllForms,
    getFormById,
    createForm,
    updateForm,
    deleteForm
}