import { z } from 'zod'; 
import prompts from '../../prompts';

const BondSchema = z.object({
    data: z.string().min(1).describe('The sword\'s bond.')
}).describe(prompts.loreContext);

export default BondSchema;

export const config = {
    "path": "bond",
    "public": true,
    "cache": "None",
    "contentType": "text",
    "name": "Sword Bond",
    "description": "Generate a sword's bond from a partial schema.",
    "model": "gpt-4o-mini",
    "provider": "openai"
};