import FormController from "../controllers/formController.js";
import express from "express";
import cors from "cors";

const router = express.Router();

const corsOptions = {
    origin: ['http://localhost:5500', 'http://127.0.0.1', 'https://auth-user-api.onrender.com'],
    methods: 'GET,HEAD,PATCH,PUT,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

router.use(cors(corsOptions));
router.get("/forms", FormController.getAllForms);
router.get("/forms/:id", FormController.getFormById);
router.post("/forms/auth", FormController.auth);
router.post("/forms", FormController.createForm);
router.patch("/forms/:id", FormController.updateForm);
router.delete("/forms/:id", FormController.deleteForm);

export default router;



