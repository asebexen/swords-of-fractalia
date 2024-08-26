extends Node2D

var loaded_sword: Sword

func _ready():
	$SwordGenerator.generate()
	ResourceSaver.save($SwordGenerator.generated_sword, "res://test.tres")
	loaded_sword = ResourceLoader.load("res://test.tres")
