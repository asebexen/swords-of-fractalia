import { z } from 'zod'; 

const NameSchema = z.object({
    data: z.string().min(1).describe('The sword\'s name.')
}).describe('You are a narrator for a fantasy story. You are tasked with providing lore for a magical sword.');

export default NameSchema;

export const config = {
    "path": "name",
    "public": true,
    "cache": "Individual",
    "contentType": "text",
    "name": "Sword Name",
    "description": "Generate a sword's name from a partial schema.",
    "model": "gpt-4o-mini",
    "provider": "openai"
};