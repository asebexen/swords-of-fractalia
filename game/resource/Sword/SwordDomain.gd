extends Resource
class_name SwordDomain

var domain: Domain
var influence: float

func _init(pDomain: Domain, pInfluence: float):
	self.domain = pDomain
	self.influence = pInfluence
