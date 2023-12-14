const express = require ('express');
const app = express();
app.use(express.json());

const routerLibros = require ('./routes/libros');
const errorHandler = require ('./middlewares/errorHandler');

app.use('/libros', routerLibros);
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciado en puerto: 3000');
});