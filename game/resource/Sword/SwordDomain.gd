extends Resource
class_name SwordDomain

var domain: Domain
var influence: float

func _init(domain: Domain, influence: float):
	self.domain = domain
	self.influence = influence
