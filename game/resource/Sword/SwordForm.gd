extends Resource
class_name SwordForm

@export var blade: Blade
@export var handle: Handle
@export var soltyr: Soltyr

func _init():
	blade = null
	handle = null
	soltyr = null
	
func set_blade(value: Blade) -> SwordForm:
	blade = value
	return self

func set_handle(value: Handle) -> SwordForm:
	handle = value
	return self

func set_soltyr(value: Soltyr) -> SwordForm:
	soltyr = value
	return self
