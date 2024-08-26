extends Resource
class_name Lore

@export var description: String

func _init(pDescription: String):
	self.description = pDescription
	
static func from_domain_influence_map(_domains: DomainInfluence) -> Lore:
	return Lore.new("This thing has lore.")
