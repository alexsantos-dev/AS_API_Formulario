import FormModel from "../models/formModel.js";

async function authID(req, res, next) {
    const { id } = req.params
    const result = await FormModel.authID(id);
    if (result) {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404);
    }

    next();
}

export default authID