extends Resource
class_name CraftMaterial

const FLAGS_CAN_CRAFT_BLADE = 0x01
const FLAGS_CAN_CRAFT_HANDLE = 0x02
const FLAGS_CAN_CRAFT_SOLTYR = 0x04

var description: String
var domain: Domain
var flags_can_craft: int
var ai_hint: String

func _init(name):
	self.name = name
	description = 'no description'
	domain = null
	ai_hint = ''
	
func set_description(value: String) -> CraftMaterial:
	description = value
	return self
	
func set_domain(value: Domain) -> CraftMaterial:
	domain = value
	return self

func set_flags_can_craft(value: int) -> CraftMaterial:
	flags_can_craft = value
	return self

func set_ai_hint(value: String) -> CraftMaterial:
	ai_hint = value
	return self

