extends Resource
class_name Domain

@export var name: String
@export var description: String

func to_json() -> Dictionary:
	var data = {
		"name": name,
		"description": description,

	}
	return data
