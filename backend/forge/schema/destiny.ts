import { z } from 'zod'; 

const DestinySchema = z.object({
    data: z.string().min(1).describe('The sword\'s destiny.')
}).describe('You are a narrator for a fantasy story. You are tasked with providing lore for a magical sword.');

export default DestinySchema;

export const config = {
    "path": "destiny",
    "public": true,
    "cache": "Individual",
    "contentType": "text",
    "name": "Sword Destiny",
    "description": "Generate a sword's destiny from a partial schema.",
    "model": "gpt-4o-mini",
    "provider": "openai"
};