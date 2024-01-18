import express from "express";
import { conectDatabase } from "./src/database/db.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
conectDatabase();
app.use(express.json());
//app.use('/api');

app.listen(process.env.PORT, () => {
    console.log(`Servidor ativo em: http://localhost:${process.env.PORT}`);
});

