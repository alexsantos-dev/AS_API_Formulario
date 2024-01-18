import FormController from "../controllers/formController.js";
import express from "express";

const router = express.Router();

router.get("/forms", FormController.getAllForms);
router.get("/forms", FormController.getFormById);
router.post("/forms", FormController.createForm);
router.patch("/forms:id", FormController.updateForm);
router.delete("/forms:id", FormController.deleteForm);

export default router;



