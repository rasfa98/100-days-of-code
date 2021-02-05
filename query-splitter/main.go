package main

import (
	"fmt"
	"os"
	"regexp"
	"strings"
)

func main() {
	url := os.Args[1]
	regexp := regexp.MustCompile("([?|&])")
	queries := regexp.Split(url, -1)

	_, queries = queries[0], queries[1:]

	for i := 0; i < len(queries); i++ {
		splitQuery := strings.Split(queries[i], "=")

		key, value := splitQuery[0], splitQuery[1]

		fmt.Println(string("\033[35m"), key, string("\033[33m"), value)
	}

	return
}
