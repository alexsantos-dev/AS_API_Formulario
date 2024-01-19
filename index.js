import express from "express";
import { conectDatabase } from "./src/database/db.js";
import FormRoutes from "./src/routes/formRoutes.js";
import dotenv from "dotenv";
import configureCors from "./corsConfig.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

conectDatabase();
app.use(express.json());
app.use("/api", FormRoutes);
configureCors(app)


async function api() {
    const accessUrl = async () => {
        try {
            await axios.get('https://auth-user-api.onrender.com/api/forms');
        } catch (error) {
            console.error(error.message);
            setInterval(accessUrl, 5000);
        }
    };

    setInterval(accessUrl, 60000);


    await new Promise(() => { });
}

api();

app.listen(PORT, () => {
    console.log('Conexão bem sucedida! ✅');
    console.log(`Servidor ativo em: http://localhost:${PORT} 📎`);
});


