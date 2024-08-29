package main

import (
	"bufio"
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
	shouldQuit := false
	for !shouldQuit {
		name := promptName()
		description := promptDescription()
		domain := promptDomain()
		matType := promptType()
		canCraft := promptCanCraft()

		craftMaterial := CraftMaterial{
			Name:        name,
			Description: description,
			Domain:      domain,
			Type:        matType,
			CanCraft:    canCraft,
		}

		out, _ := json.MarshalIndent(craftMaterial, "", "  ")
		writeToFile(name, out)

		shouldQuit = promptQuit()
	}
}

func writeToFile(fileName string, data []byte) {
	dirPath := "./materials"
	filePath := filepath.Join(dirPath, fileName+".json")

	err := os.MkdirAll(dirPath, 0644)
	if err != nil {
		fmt.Println("Error creating directory:", err)
		return
	}

	file, err := os.Create(filePath)
	if err != nil {
		fmt.Println("Error creating file:", err)
		return
	}
	defer file.Close()

	_, err = file.Write(data)
	if err != nil {
		fmt.Println("Error writing to file:", err)
		return
	}

	fmt.Printf("Successfully written to %s\n", filePath)
}

func readLine() string {
	reader := bufio.NewReader(os.Stdin)
	result, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("Error reading stdin:", err)
		return ""
	}
	return strings.TrimSpace(result)
}

func promptName() string {
	fmt.Print("name: ")
	name := readLine()
	return name
}

func promptDescription() string {
	fmt.Print("description: ")
	description := readLine()
	return description
}

func promptDomain() string {
	validDomains := map[string]string{"d": "Dust", "n": "Neir", "a": "Aes", "k": "Kel"}
	var domain string
	firstLoop := true

	for validDomains[domain] == "" {
		if !firstLoop {
			fmt.Print("Pick one of: d n a k\n")
		} else {
			firstLoop = false
		}

		fmt.Print("domain: ")
		input := readLine()
		if len(input) == 0 {
			continue
		}
		domain = strings.ToLower(string(input[0]))
	}

	return validDomains[domain]
}

func promptType() string {
	validTypes := map[string]bool{"Metal": true, "Wood": true, "Fiber": true, "Leather": true, "Gem": true, "Crystal": true}
	var matType string
	firstLoop := true

	for !validTypes[matType] {
		if !firstLoop {
			validTypeKeys := make([]string, 0, len(validTypes))
			for k := range validTypes {
				validTypeKeys = append(validTypeKeys, k)
			}
			fmt.Printf("Pick one of: %s\n", strings.Join(validTypeKeys, ", "))
		} else {
			firstLoop = false
		}

		fmt.Print("type: ")
		input := readLine()
		if len(input) == 0 {
			continue
		}
		matType = strings.ToUpper(string(input[0])) + strings.ToLower(string(input[1:]))
	}

	return matType
}

func promptCanCraft() map[string]bool {
	firstLoop := true
	var canCraft map[string]bool
	parseSuccessful := false

	for !parseSuccessful {
		if !firstLoop {
			fmt.Print("Write a string consisting of only the following characters: h(andle), b(lade), s(oltyr)")
		} else {
			firstLoop = false
		}

		fmt.Print("canCraft: ")
		input := readLine()
		var err error
		canCraft, err = parseCanCraftFlags(input)
		parseSuccessful = err == nil
	}

	return canCraft
}

func parseCanCraftFlags(flags string) (map[string]bool, error) {
	validFlags := map[rune]string{'h': "handle", 'b': "blade", 's': "soltyr"}
	canCraftFlags := map[string]bool{"handle": false, "blade": false, "soltyr": false}

	for _, char := range flags {
		flagName := validFlags[char]
		if flagName == "" {
			return nil, fmt.Errorf("invalid flag %c", char)
		}

		canCraftFlags[flagName] = true
	}

	return canCraftFlags, nil
}

func promptQuit() bool {
	fmt.Println("Would you like to make another? (Y/n) ")
	input := readLine()
	if len(input) == 0 {
		return false
	}
	return strings.ToLower(string(input[0])) == "n"
}
