import express from "express";
import { conectDatabase } from "./src/database/db.js";
import FormRoutes from "./src/routes/formRoutes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
conectDatabase();
app.use(express.json());
app.use("/api", FormRoutes);


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Conexão bem sucedida! ✅');
    console.log(`Servidor ativo em: http://localhost:${PORT} 📎`);
});


