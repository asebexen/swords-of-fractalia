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
