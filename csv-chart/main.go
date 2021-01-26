package main

import (
	"encoding/csv"
	"fmt"
	"log"
	"os"
	"strconv"

	"github.com/wcharczuk/go-chart"
)

type Record struct {
	Value1 string
	Value2 string
}

func main() {
	var xValues []float64
	var yValues []float64

	file, err := os.Open("data.csv")

	if err != nil {
		log.Fatal(err)
	}

	rows, err := csv.NewReader(file).ReadAll()

	if err != nil {
		fmt.Println(err)
	}
	for _, line := range rows {
		row := Record{
			Value1: line[0],
			Value2: line[1],
		}

		xValue, _ := strconv.ParseFloat(row.Value1, 64)
		yValue, _ := strconv.ParseFloat(row.Value2, 64)

		xValues = append(xValues, xValue)
		yValues = append(yValues, yValue)
	}

	err = file.Close()

	if err != nil {
		log.Fatal(err)
	}

	graph := chart.Chart{
		Series: []chart.Series{
			chart.ContinuousSeries{
				XValues: xValues,
				YValues: yValues,
			},
		},
	}

	file, _ = os.Create("output.png")
	graph.Render(chart.PNG, file)
	file.Close()
}
