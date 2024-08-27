extends Node2D

var loaded_sword: Sword

func _ready():
	$SwordGenerator.generate()
	ResourceSaver.save($SwordGenerator.generated_sword, "res://test.tres")
	var data = JSON.stringify($SwordGenerator.generated_sword.to_json())
	var file = FileAccess.open("test.json", FileAccess.WRITE)
	file.store_line(data)
	loaded_sword = ResourceLoader.load("res://test.tres")
