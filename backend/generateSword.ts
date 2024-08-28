import forge from "./forge/client";
import prompts from "./prompts";
import { NamelessSword, PartialSword, Sword } from "./swordTypes";

const generateSword = async (partialSword: PartialSword) => {
    const [destiny, bond, oath] = await Promise.all([
        forge.destiny.query(prompts.destiny(partialSword)).then(x => x.data),
        forge.bond.query(prompts.bond(partialSword)).then(x => x.data),
        forge.oath.query(prompts.oath(partialSword)).then(x => x.data),
    ]);
  
    const namelessSword: NamelessSword = {...partialSword, lore: {destiny, bond, oath}};
    const name = await forge.name.query(prompts.name(namelessSword)).then(x => x.data);

    const sword: Sword = {...namelessSword, name};
    return sword;
}

export default generateSword;