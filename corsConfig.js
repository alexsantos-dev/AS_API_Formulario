import cors from 'cors';

const configureCors = (app) => {
    const corsOptions = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        optionsSuccessStatus: 204,
        allowedHeaders: 'Content-Type, Authorization',
    };

    app.use(cors(corsOptions));

    app.use((req, res, next) => {
        // Adicione a lógica adicional aqui
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Credentials', true);

        if (req.method === 'OPTIONS') {
            res.sendStatus(204);
        } else {
            next();
        }
    });
};

export default configureCors;
