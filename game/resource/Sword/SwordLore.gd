extends Resource
class_name SwordLore

var name: String
var bond: String
var oath: String
var destiny: String

func _init(name: String):
	self.name = name
	
func set_bond(value: String) -> Lore:
	self.bond = value
	return self
	
func set_oath(value: String) -> Lore:
	self.oath = value
	return self
	
func set_destiny(value: String) -> Lore:
	self.destiny = value
	return self

