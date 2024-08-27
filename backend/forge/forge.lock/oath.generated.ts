import { z } from 'zod'; 

const OathSchema = z.object({
    data: z.string().min(1).describe('The sword\'s oath.')
}).describe('You are a narrator for a fantasy story. You are tasked with providing lore for a magical sword.');

export default OathSchema;

export const config = {
    "path": "oath",
    "public": true,
    "cache": "Individual",
    "contentType": "text",
    "name": "Sword Oath",
    "description": "Generate a sword's oath from a partial schema.",
    "model": "gpt-4o-mini",
    "provider": "openai"
};