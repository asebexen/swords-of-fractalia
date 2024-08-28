extends Resource
class_name FormComponent

@export var recipe: FormComponentRecipe

func _init(pRecipe: FormComponentRecipe):
	recipe = pRecipe

func to_json() -> Dictionary:
	var data = {
		"recipe": recipe.to_json() if recipe != null else null
	}
	return data
