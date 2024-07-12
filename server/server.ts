import express, { Response } from 'express';

const PORT = 3000;

const server = express();

server.get('/', (_, response: Response) => response.json({message: 'Welcome to Swords of Fractalia!'}) );

server.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));