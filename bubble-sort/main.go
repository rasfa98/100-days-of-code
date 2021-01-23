package main

import "fmt"

func bubbleSort(array []int) []int {
	length := len(array)

	for i := 0; i < length-1; i++ {
		for j := 0; j < length-i-1; j++ {
			if array[j] > array[j+1] {
				array[j], array[j+1] = array[j+1], array[j]
			}
		}
	}

	return array
}

func main() {
	array := []int{9, 4, 9, 3, 2, 19, 13, 1, 5, 8}
	result := bubbleSort(array)

	fmt.Println(result)
}
