extends Resource
class_name Sword

var name: String
var lore: SwordLore
var form: SwordForm
var domain: SwordDomain

func _init(name: String):
	self.name = name
	
func set_lore(value: SwordLore) -> Sword:
	lore = value
	return self
	
func set_form(value: SwordForm) -> Sword:
	form = value
	return self

func set_domain(value: SwordDomain) -> Sword:
	domain = value
	return self
