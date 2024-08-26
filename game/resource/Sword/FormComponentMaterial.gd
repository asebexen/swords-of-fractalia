extends Resource
class_name FormComponentMaterial

var material: CraftMaterial
var quantity: int

func _init(name: String):
	self.name = name
	material = null
	quantity = 0

func set_material(value: CraftMaterial) -> SwordMaterial:
	material = value
	return self
	
func set_quantity(value: int) -> SwordMaterial:
	quantity = value
	return self
	
