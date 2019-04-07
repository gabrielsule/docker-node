const express = require('express');
const bodyParser = require('body-parser');

const config = {
    name: 'dokerize',
    port: 3000,
    host: '0.0.0.0',
};

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Hi Devs');
});

app.listen(config.port, config.host, (e) => {
    if (e) {
        throw new Error('Internal Server Error');
    }
    console.log(`${config.name} running on ${config.host}:${config.port}`);
});