import { SwordSchema } from "./swordTypes";
import testSword from './test.json';

const sword = SwordSchema.parse(testSword);
console.dir(sword, {depth: null});