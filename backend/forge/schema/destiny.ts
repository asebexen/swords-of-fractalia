import { z } from 'zod'; 
import prompts from '../../prompts';

const DestinySchema = z.object({
    data: z.string().min(1).describe('The sword\'s destiny.')
}).describe(prompts.loreContext);

export default DestinySchema;

export const config = {
    "path": "destiny",
    "public": true,
    "cache": "None",
    "contentType": "text",
    "name": "Sword Destiny",
    "description": "Generate a sword's destiny from a partial schema.",
    "model": "gpt-4o-mini",
    "provider": "openai"
};