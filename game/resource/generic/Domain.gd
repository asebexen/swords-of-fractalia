extends Resource
class_name Domain

var description: String
var ai_context: String

func _init(name: String):
	self.name = name
	description = 'no description'
	ai_context = ''
	
func set_description(value: String) -> Domain:
	description = value
	return self

func set_ai_context(value: String) -> Domain:
	ai_context = value
	return self
