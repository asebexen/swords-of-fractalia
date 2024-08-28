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

func to_json() -> Dictionary:
	var data = {
		"blade": blade.to_json() if blade != null else null,
		"handle": handle.to_json() if handle != null else null,
		"soltyr": soltyr.to_json() if soltyr != null else null
	}
	return data
