import { z } from 'zod'; 

const BondSchema = z.object({
    data: z.string().min(1).describe('The sword\'s bond.')
}).describe('You are a narrator for a fantasy story. You are tasked with providing lore for a magical sword.');

export default BondSchema;

export const config = {
    "path": "bond",
    "public": true,
    "cache": "Individual",
    "contentType": "text",
    "name": "Sword Bond",
    "description": "Generate a sword's bond from a partial schema.",
    "model": "gpt-4o-mini",
    "provider": "openai"
};