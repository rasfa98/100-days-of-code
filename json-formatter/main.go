package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
)

func main() {
	data, err := ioutil.ReadFile("messy.json")

	if err != nil {
		log.Fatal(err)
	}

	tmp := json.RawMessage(data)

	data, err = json.MarshalIndent(tmp, "", "    ")

	if err != nil {
		log.Fatal(err)
	}

	ioutil.WriteFile("pretty.json", data, 0644)
}
