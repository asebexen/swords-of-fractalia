import forge from "./forge/client";
import prompts from "./prompts";
import { PartialSwordSchema, SwordSchema } from "./swordTypes";
import testSword from './test.json';

const sword = PartialSwordSchema.parse(testSword);
const destiny = (await forge.destiny.query(prompts.destiny(sword))).data;
console.log(destiny);