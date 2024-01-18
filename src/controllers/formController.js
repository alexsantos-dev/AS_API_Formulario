import FormModel from "../models/formModel.js";

async function getAllForms(req, res) {
    try {
        const forms = await FormModel.getAllForms();
        res.json(forms);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

async function getFormById(req, res) {
    try {
        const { id } = req.params;
        const form = await FormModel.getFormById(id);
        if (form) {
            res.json(form);
        }
        else {
            res.status(404).json({ error: "Formulario nao encontrado" });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

async function createForm(req, res) {
    try {
        const { nome, email, telefone, nascimento, sexo } = req.body;
        await FormModel.createForm(nome, email, telefone, nascimento, sexo);
        res.send("Formulario criado com sucesso!");
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar formulário' });
    }
}

async function updateForm(req, res) {
    try {
        const { id } = req.params
        const { nome, email, telefone, nascimento, sexo } = req.body;
        await FormModel.updateForm(nome, email, telefone, nascimento, sexo, id);
        res.send("Formulario atualizado!");
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao atualizar formulário' });
    }
}

async function deleteForm(req, res) {
    try {
        const { id } = req.params;
        await FormModel.deleteForm(id);
        res.send("Formulario deletado!")
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao excluir formulário' });
    }
}

export default {
    getAllForms, getFormById, createForm, updateForm, deleteForm
}