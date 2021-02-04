package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	if len(os.Args) != 2 {
		fmt.Println(string("\033[31m"), "Please provide a valid URL")
		return
	}

	url := os.Args[1]

	fmt.Println(string("\033[32m"), "Making GET request for: ", url)
	fmt.Println()

	res, err := http.Get(url)

	if err != nil {
		fmt.Println(string("\033[31m"), err)
		return
	}

	headers := res.Header

	for key, value := range headers {
		fmt.Println(string("\033[36m"), key, string("\033[33m"), value)
	}

	return
}
