import express from "express";
import { conectDatabase } from "./src/database/db.js";
import FormRoutes from "./src/routes/formRoutes.js";
import configureCors from "./corsConfig.js";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
configureCors(app);
const PORT = process.env.PORT || 3300

conectDatabase();
app.use(express.json());
app.use("/api", FormRoutes);

async function api() {
    const accessUrl = async () => {
        try {
            await axios.get(process.env.KEEP_ALIVE);
        } catch (error) {
            console.error(error.message);
            setInterval(accessUrl, 5000);
        }
    };

    setInterval(accessUrl, 120000);


    await new Promise(() => { });
}

api();

app.listen(PORT, () => {
    console.log('Conexão bem sucedida! ✅');
    console.log(`Servidor ativo em: http://localhost:${PORT} 📎`);
});


