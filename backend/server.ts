import express from 'express';
import { validateRequestBody } from 'zod-express-middleware';
import { PartialSword, PartialSwordSchema, Sword, SwordSchema } from './swordTypes';
import generateSword from './generateSword';
import fs from 'node:fs/promises';

const PORT = 3000;

const app = express();
app.use(express.json());

app.get('/', (_, res) => res.end('Swords of Fractalia API'));

app.post('/generateSword', validateRequestBody(PartialSwordSchema), async (req, res) => {
    const partialSword: PartialSword = req.body;

    const sword = await (async () => {
        try {
            const sword: Sword = SwordSchema.parse(await generateSword(partialSword));
            return sword;
        } catch (e) {
            console.error(e);
            return null;
        }
    })();
    if (!sword) {
        return res.status(500).end('Internal server error.');
    }

    fs.writeFile(`generated_swords/${new Date().toUTCString()}.json`, JSON.stringify(sword, undefined, 2));
    res.json(sword);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));