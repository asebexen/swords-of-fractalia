extends Resource
class_name FormComponentRecipe

# {material: CraftMaterial.name, quantity: int}
@export var items: Array[Dictionary]

func _init():
	items = []
	
func add_item(material: CraftMaterial, quantity: int):
	var found = null
	for item in items:
		if item.material == material:
			found = item
			break
	if found != null:
		found.quantity += quantity
	else:
		items.append({"material": material, "quantity": quantity})
