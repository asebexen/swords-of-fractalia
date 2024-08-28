import { FormComponent, NamelessSword, PartialSword } from "./swordTypes";

const prompts = {
    loreContext: 'You are a narrator for a fantasy story. You are tasked with providing lore for a magical sword. Go directly into the narration, and keep it reasonably brief, no more than 2 or 3 sentences. Do not be terse, however; be florid in your descriptions.',
    nameContext: `You are a narrator for a fantasy story. You are tasked with providing lore for a magical sword. In particular, you must name this sword. Its name may be English, or may be fantastical. Pick whatever seems most fitting. Some examples include: Dragonfang, Heaven's Justice, Kalimfar, Despair of the Fallen, Duren`,
    destiny: (sword: PartialSword) => {
        const material = primaryMaterial(sword.form.blade);
        return `This sword has a blade constructed primarily of a ${material.type.toLocaleLowerCase()} called ${material.name}. This material is described as such: ${material.description}. This material belongs to a domain named ${material.domain.name}, described as such: ${material.domain.description}. The blade is said to be a living thing, and its 'destiny' refers to the mark which it hopes to leave on the world, metaphorical or otherwise. This represents the 'future' of the sword. Please narrate this destiny.`
    },
    oath: (sword: PartialSword) => {
        const material = primaryMaterial(sword.form.handle);
        return `This sword has a handle constructed primarily of a ${material.type.toLocaleLowerCase()} called ${material.name}. This material is described as such: ${material.description}. This material belongs to a domain named ${material.domain.name}, described as such: ${material.domain.description}. The handle is said to be a living thing, and its 'oath' refers to the values which the sword holds to be important. This is potentially related to the kind of person who will best wield the weapon. This represents the 'present' of the sword. The oath is not a spoken oath, so do not narrate it from a first person perspective. Please narrate this oath.`
    },
    bond: (sword: PartialSword) => {
        const material = primaryMaterial(sword.form.soltyr);
        return `This sword has a soltyr constructed primarily of a ${material.type.toLocaleLowerCase()} called ${material.name}. A soltyr can be understood as a gem possessed by a primordial spirit. The material is described as such: ${material.description}. This material belongs to a domain named ${material.domain.name}, described as such: ${material.domain.description}. The soltyr is said to contain the spirit a living thing, and its 'bond' refers to the kind of personality which the sword possesses. It's a latent voice that goes mostly unheard, but affects the sword's performance in hard-to-measure ways. Please narrate this bond.`
    },
    name: (sword: NamelessSword) => {
        const {destiny, oath, bond} = sword.lore;
        const domain = primaryDomain(sword);
        return `This sword possesses a destiny, which describes the future of the blade and the mark it will leave on the world. That destiny is as such: ${destiny} This sword possesses an oath, which describes the things the sword values and hints at the person who might effectively wield the sword. That oath is described as such: ${oath}. This sword possesses a bond, which describes the kind of personality the sword possesses, which shapes the sword's existence in intangible ways. That bond is described as such: ${bond}. Finally, this sword belongs primarily to a domain named ${domain.name}, which is described as such: ${domain.description}. Please name this sword.`
    }
};

const primaryMaterial = (component: FormComponent) => component.recipe.items.reduce((prev, curr) => curr.quantity > prev.quantity ? curr : prev).material;
const primaryDomain = (sword: NamelessSword) => sword.domains.reduce((prev, curr) => curr.influence > prev.influence ? curr : prev).domain;

export default prompts;