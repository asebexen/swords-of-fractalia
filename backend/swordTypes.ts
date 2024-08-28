import {z} from 'zod';

export const DomainSchema = z.object({
    description: z.string(),
    name: z.string(),
});

export const DomainInfluenceSchema = z.array(z.object({
    domain: DomainSchema,
    influence: z.number(),
}));

export const CraftMaterialSchema = z.object({
    description: z.string(),
    domain: DomainSchema,
    name: z.string(),
    type: z.string(),
});

export const RecipeItemSchema = z.object({
    material: CraftMaterialSchema,
    quantity: z.number(),
});

export const RecipeSchema = z.object({
    items: z.array(RecipeItemSchema),
});

export const FormComponentSchema = z.object({
    recipe: RecipeSchema,
});
export type FormComponent = z.infer<typeof FormComponentSchema>;

export const BladeSchema = FormComponentSchema;
export const HandleSchema = FormComponentSchema;
export const SoltyrSchema = FormComponentSchema;

export const SwordFormSchema = z.object({
    blade: BladeSchema,
    handle: HandleSchema,
    soltyr: SoltyrSchema,
});

export const LoreSchema = z.string();

export const SwordLoreSchema = z.object({
    bond: LoreSchema,
    destiny: LoreSchema,
    oath: LoreSchema,
});

export const PartialSwordLoreSchema = z.object({
    bond: z.null(),
    destiny: z.null(),
    oath: z.null(),
})

export const PartialSwordSchema = z.object({
    domains: DomainInfluenceSchema,
    form: SwordFormSchema,
    lore: PartialSwordLoreSchema,
    name: z.null(),
});
export type PartialSword = z.infer<typeof PartialSwordSchema>;

export const NamelessSwordSchema = z.object({
    domains: DomainInfluenceSchema,
    form: SwordFormSchema,
    lore: SwordLoreSchema,
    name: z.null(),
})
export type NamelessSword = z.infer<typeof NamelessSwordSchema>;

export const SwordSchema = z.object({
    domains: DomainInfluenceSchema,
    form: SwordFormSchema,
    lore: SwordLoreSchema,
    name: z.string(),
});
export type Sword = z.infer<typeof SwordSchema>;
