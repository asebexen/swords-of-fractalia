import express from 'express';

const PORT = 3000;

const app = express();
app.use(express.json());

app.get('/', (_, res) => res.end('Swords of Fractalia API'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));