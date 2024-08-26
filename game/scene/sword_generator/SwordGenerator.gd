extends Node

const MATERIAL_DIR = "res://resource/craft_material"
var generated_sword: Sword
var materials: Array[CraftMaterial]

func _ready():
	load_craft_materials()

func generate() -> void:
	var blade_materials = generate_recipe("blade")
	var handle_materials = generate_recipe("handle")
	var soltyr_materials = generate_recipe("soltyr")
	
	var blade_domains = DomainInfluence.from_recipe(blade_materials)
	var handle_domains = DomainInfluence.from_recipe(handle_materials)
	var soltyr_domains = DomainInfluence.from_recipe(soltyr_materials)
	
	var blade = Blade.new(blade_materials)
	var handle = Handle.new(handle_materials)
	var soltyr = Soltyr.new(soltyr_materials)
	
	var destiny = Lore.from_domain_influence_map(blade_domains)
	var bond = Lore.from_domain_influence_map(handle_domains)
	var oath = Lore.from_domain_influence_map(soltyr_domains)
	
	var sword_form = SwordForm.new().set_blade(blade).set_handle(handle).set_soltyr(soltyr)
	var sword_lore = SwordLore.new().set_destiny(bond).set_bond(destiny).set_oath(oath)
	var sword_domains = DomainInfluence.combine([blade_domains, handle_domains, soltyr_domains])
	var sword_name = SwordName.from_domain_and_lore(sword_domains, sword_lore)
	
	var sword = Sword.new().set_form(sword_form).set_lore(sword_lore).set_domains(sword_domains).set_sword_name(sword_name)
	generated_sword = sword
	
func generate_recipe(form_component_name: String) -> FormComponentRecipe:
	var recipe = FormComponentRecipe.new()
	
	var filtered_materials = materials.filter(func(x): return x.can_craft[form_component_name])
	var selected_material = filtered_materials[randi_range(0, filtered_materials.size() - 1)]
	var quantity = 100
	recipe.add_item(selected_material, quantity)
	
	return recipe

func load_craft_materials():
	for file_name in DirAccess.get_files_at(MATERIAL_DIR):
		if file_name.get_extension() == "tres":
			var material = (ResourceLoader.load("%s/%s" % [MATERIAL_DIR, file_name]))
			materials.append(material)
