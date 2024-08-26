extends Resource
class_name SwordForm

var name: String
var blade: Blade
var handle: Handle
var soltyr: Soltyr

func _init(name: String):
	self.name = name
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
	soltyr = soltyr
	return self
