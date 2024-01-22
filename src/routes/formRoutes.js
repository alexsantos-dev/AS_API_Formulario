import FormController from "../controllers/formController.js";
import authID from "../middlewares/authID.middleware.js";
import express from "express";

const router = express.Router();

router.get("/forms", FormController.getAllForms);
router.get("/forms/:id", FormController.getFormById);
router.post("/forms/auth", FormController.auth);
router.post("/forms", FormController.createForm);
router.post("/forms/reset-password", FormController.resetPassword);
router.patch("/forms/:id", authID, FormController.updateForm);
router.delete("/forms/:id", authID, FormController.deleteForm);

export default router;



