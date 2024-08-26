extends Resource
class_name FormComponentMaterial

var material: CraftMaterial
var quantity: int

func _init(pMaterial: CraftMaterial, pQuantity: int):
	material = pMaterial
	quantity = pQuantity
