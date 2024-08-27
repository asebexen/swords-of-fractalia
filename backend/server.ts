import express from 'express';
import { validateRequestBody } from 'zod-express-middleware';
import { PartialSwordSchema } from './swordTypes';

const PORT = 3000;

const app = express();
app.use(express.json());

app.get('/', (_, res) => res.end('Swords of Fractalia API'));

app.post('/generateSword', validateRequestBody(PartialSwordSchema), (req, res) => {
    
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));