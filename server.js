require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const orderRoutes = require('./src/routes/orderRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas
app.use('/', orderRoutes);

// Conexão com MongoDB
mongoose.connect(process.env.url_db)
    .then(() => console.log('MongoDB Atlas Conectado!'))
    .catch((err) => console.error('Erro ao conectar no MongoDB:', err));

// Inicialização
const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Documentação Swagger disponível em http://localhost:${PORT}/api-docs`);
});