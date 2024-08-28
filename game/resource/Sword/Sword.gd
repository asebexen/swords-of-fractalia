extends Resource
class_name Sword

@export var name: SwordName
@export var lore: SwordLore
@export var form: SwordForm
@export var domains: DomainInfluence

func _init():
	name = null
	lore = null
	form = null
	domains = null
	
func set_lore(value: SwordLore) -> Sword:
	lore = value
	return self
	
func set_form(value: SwordForm) -> Sword:
	form = value
	return self

func set_domains(value: DomainInfluence) -> Sword:
	domains = value
	return self

func set_sword_name(value: SwordName) -> Sword:
	name = value
	return self
	
func to_json() -> Dictionary:
	var data = {
		"name": name.to_json() if name != null else null,
		"lore": lore.to_json() if lore != null else null,
		"form": form.to_json() if form != null else null,
		"domains": domains.to_json() if domains != null else null
	}
	return data
