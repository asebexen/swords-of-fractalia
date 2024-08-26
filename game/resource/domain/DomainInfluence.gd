extends Resource
class_name DomainInfluence

# {domain: Domain, influence: int}
@export var domain_influence: Array[Dictionary]

func _init():
	domain_influence = []

func add_domain(domain: Domain, influence: int) -> void:
	var found = null
	for entry in domain_influence:
		if entry.domain == domain:
			found = entry
			break
	if found != null:
		found.influence += influence
	else:
		domain_influence.append({"domain": domain, "influence": influence})

func get_influence(domain: Domain) -> int:
	var found = null
	for entry in domain_influence:
		if entry.domain == domain:
			found = entry
			break
	return found.influence if found else -1

static func from_recipe(recipe: FormComponentRecipe) -> DomainInfluence:
	var result = DomainInfluence.new()
	for entry in recipe.items:
		result.add_domain(entry.material.domain, entry.quantity)
	return result

static func combine(domain_influence_maps: Array[DomainInfluence]) -> DomainInfluence:
	var combined = DomainInfluence.new()
	for map in domain_influence_maps:
		for entry in map.domain_influence:
			combined.add_domain(entry.domain, entry.influence)
	return combined
