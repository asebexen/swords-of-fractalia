package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"
)

type CraftMaterial struct {
	Name        string          `json:"name"`
	Description string          `json:"description"`
	Domain      string          `json:"domain"`
	Type        string          `json:"type"`
	CanCraft    map[string]bool `json:"canCraft"`
}

func main() {
	dirPath := "./materials"
	entries, err := os.ReadDir(dirPath)
	if err != nil {
		fmt.Println("Error reading directory:", err)
		return
	}

	var filePaths []string
	for _, entry := range entries {
		filePath := filepath.Join(dirPath, entry.Name())
		if strings.HasSuffix(filePath, ".json") {
			filePaths = append(filePaths, filePath)
		}
	}

	var materials []CraftMaterial
	for _, filePath := range filePaths {
		file, err := os.ReadFile(filePath)
		if err != nil {
			fmt.Println("Error opening file:", err)
			return
		}

		var material CraftMaterial
		err = json.Unmarshal(file, &material)
		if err != nil {
			fmt.Println("Error unmarshaling json:", err)
			return
		}
		materials = append(materials, material)
	}

	jsonData, err := json.MarshalIndent(materials, "", "  ")
	if err != nil {
		fmt.Println("Error marshaling json:", err)
		return
	}

	file, err := os.Create("materials.json")
	if err != nil {
		fmt.Println("Error creating file:", err)
		return
	}

	_, err = file.Write(jsonData)
	if err != nil {
		fmt.Println("Error writing file:", err)
		return
	}

	fmt.Println("Materials bundle written to materials.json")
}
