const app = require('../src/app');
const port = process.env.PORT || 3321;

app.listen(port, () => {
    console.log('Node Version: ' + process.version);
    console.log(`Servidor iniciado na porta ${port}`);
});