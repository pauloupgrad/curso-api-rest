const express = require("express");
const port = 8081;



//Criar servidor
const server = express();

server.get('/', (resq, resp) => {
    resp.send(`<h1>Home</h1>`);
});

server.get('/perfil/', (resq, resp) => {
    resp.send('<h1>Perfil</h1>');
});

server.get('/contato', (resq, resp) => {
    resp.send('<h1>Contato</h1>');
});


server.listen(port, () => {
    console.log(`Servidor funcionando na porta: http:\\localhost:${port}`);
    console.log(`Para sair do servidor digite: Ctrl + c`);
});