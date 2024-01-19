import FormController from "../controllers/formController.js";
import express from "express";
import cors from "cors";

const router = express.Router();

router.get("/forms", FormController.getAllForms);
router.get("/forms/:id", FormController.getFormById);
router.post("/forms/auth", FormController.auth);
router.post("/forms", FormController.createForm);
router.patch("/forms/:id", FormController.updateForm);
router.delete("/forms/:id", FormController.deleteForm);

export default router;



