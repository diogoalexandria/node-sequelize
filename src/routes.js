const { Router } = require('express');

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({
        Message: "Hello World"
    })
});

module.exports = routes;