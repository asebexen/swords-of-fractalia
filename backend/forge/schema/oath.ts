import { z } from 'zod'; 
import prompts from '../../prompts';

const OathSchema = z.object({
    data: z.string().min(1).describe('The sword\'s oath.')
}).describe(prompts.loreContext);

export default OathSchema;

export const config = {
    "path": "oath",
    "public": true,
    "cache": "None",
    "contentType": "text",
    "name": "Sword Oath",
    "description": "Generate a sword's oath from a partial schema.",
    "model": "gpt-4o-mini",
    "provider": "openai"
};