package route_handlers

import (
	"encoding/json"
	"log"
	"net/http"
)

type IndexHandlerResponse struct {
	Message string `json:"message"`
}

func IndexHandlerFunc(response http.ResponseWriter, request *http.Request) {
	if request.Method == http.MethodGet {
		body, err := json.Marshal(IndexHandlerResponse{"Welcome to Swords of Fractalia!"})
		if err != nil {
			log.Fatal(err)
			return
		}
		response.Header().Add("Content-Type", "application/json")
		response.Write(body)
	} else {
		response.WriteHeader(http.StatusMethodNotAllowed)
		response.Write([]byte("Method not allowed"))
	}
}
