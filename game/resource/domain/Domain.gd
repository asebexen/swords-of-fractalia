extends Resource
class_name Domain

@export var name: String
@export var description: String
@export var ai_context: String

func to_json() -> Dictionary:
	var data = {
		"name": name,
		"description": description,
		"ai_context": ai_context
	}
	return data
