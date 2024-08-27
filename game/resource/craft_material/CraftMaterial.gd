extends Resource
class_name CraftMaterial

enum MaterialType {
	Metal,
	Wood,
	Fiber,
	Leather,
	Gem,
	Crystal
}

const MATERIALS_STRING = {
	MaterialType.Metal: "Metal",
	MaterialType.Wood: "Wood",
	MaterialType.Fiber: "Fiber",
	MaterialType.Leather: "Leather",
	MaterialType.Gem: "Gem",
	MaterialType.Crystal: "Crystal"
}

@export var name: String
@export var description: String
@export var domain: Domain
@export var type: MaterialType
@export var can_craft = {
	'blade': false,
	'handle': false,
	'soltyr': false
}
@export var ai_hint: String

func to_json() -> Dictionary:
	var data = {
		"name": name,
		"description": description,
		"domain": domain.to_json(),
		"type": MATERIALS_STRING[type]
	}
	return data
