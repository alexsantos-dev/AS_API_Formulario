import formModel from "../models/formModel.js";
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

async function auth(req, res) {
    try {
        const { email, senha } = req.body;
        const form = await FormModel.auth(email, senha);
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

async function resetPassword(req, res) {
    try {

        const { email, newPassword, confirmPassword } = req.body;
        const user = await FormModel.getUserByEmail(email);
        if (!user) {
            return res.status(400).json({ error: 'Email não encontrado' });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).send({ error: `As senhas não coincidem` });
        }


        await FormModel.updatePasswordByEmail(email, confirmPassword);
        res.send("Senha atualizada com sucesso!");
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao redefinir a senha' });

    }
}

async function createForm(req, res) {
    try {
        const { nome, email, senha, telefone, nascimento, sexo } = req.body;
        await FormModel.createForm(nome, email, senha, telefone, nascimento, sexo);
        res.status(201).json({ message: "Formulario criado com sucesso!" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao criar formulário' });
    }
}

async function updateForm(req, res) {
    try {
        const { id } = req.params
        const { nome, email, senha, telefone, nascimento, sexo } = req.body;
        await FormModel.updateForm(nome, email, senha, telefone, nascimento, sexo, id);
        res.status(204).json({ message: "Formulario atualizado!" });
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
        res.status(204).json({ message: "Formulario deletado!" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao excluir formulário' });
    }
}

export default {
    getAllForms, getFormById, auth, resetPassword, createForm, updateForm, deleteForm
}