package main

import (
	"log"
	"main/route_handlers"
	"net/http"
)

func main() {
	http.HandleFunc("/", route_handlers.IndexHandlerFunc)
	err := http.ListenAndServe(":8080", nil)
	log.Fatal(err)
}
