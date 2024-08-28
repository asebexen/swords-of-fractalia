import { z } from 'zod'; 
import prompts from '../../prompts';

const NameSchema = z.object({
    data: z.string().min(1).describe('The sword\'s name.')
}).describe(prompts.nameContext);

export default NameSchema;

export const config = {
    "path": "name",
    "public": true,
    "cache": "None",
    "contentType": "text",
    "name": "Sword Name",
    "description": "Generate a sword's name from a partial schema.",
    "model": "gpt-4o-mini",
    "provider": "openai"
};