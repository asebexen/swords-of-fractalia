extends Resource
class_name FormComponentMaterial

var material: CraftMaterial
var quantity: int

func _init(material: CraftMaterial, quantity: int):
	self.material = material
	self.quantity = quantity
