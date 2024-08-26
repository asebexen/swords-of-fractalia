extends Resource
class_name SwordLore

var bond: String
var oath: String
var destiny: String

func _init(name: String):
	self.name = name
	
func set_bond(value: String) -> SwordLore:
	self.bond = value
	return self
	
func set_oath(value: String) -> SwordLore:
	self.oath = value
	return self
	
func set_destiny(value: String) -> SwordLore:
	self.destiny = value
	return self

