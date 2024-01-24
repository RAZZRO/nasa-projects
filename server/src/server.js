const http = require('http');

const app = require('./app');

const { LoadPlanetsData } = require('./models/planets.model');
const PORT = 8000;

const server = http.createServer(app);

async function startServer() {
    await LoadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listetins on port ${PORT}...`);
    });
}

startServer();


