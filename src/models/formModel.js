import pool from "../database/db.js";

async function getAllForms() {
    const data = await pool.query("SELECT * FROM dados");
    return data;
}

async function getFormById(id) {
    const [data] = await pool.query('SELECT * FROM dados WHERE id = ?', [id]);
    return data;
}

async function createForm(newFormCampos) {
    await pool.query('INSERT INTO dados SET ?', [newFormCampos]);
}

async function updateForm(id, formCampos) {
    await pool.query("UPDATE dados SET ? WHERE id = ?", [formCampos, id]);
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