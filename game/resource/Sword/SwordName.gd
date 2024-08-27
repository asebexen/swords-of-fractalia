extends Resource
class_name SwordName

@export var name: String

func _init(pName: String):
	name = pName

static func from_domain_and_lore(_domains: DomainInfluence, _lore: SwordLore) -> SwordName:
	return SwordName.new("Dragonstail")

func to_json() -> String:
	return name
