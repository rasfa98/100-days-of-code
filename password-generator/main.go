package main

import (
	"fmt"
	"log"
	"os"

	"github.com/urfave/cli"
)

func generatePassword() string {
	return ""
}

func main() {
	app := &cli.App{
		Flags: []cli.Flag{
			&cli.IntFlag{
				Name:    "Length",
				Aliases: []string{"l"},
				Usage:   "Password length",
				Value:   12,
			},
			&cli.BoolFlag{
				Name:    "Uppercase",
				Aliases: []string{"uc"},
				Usage:   "Include uppercase characters",
				Value:   true,
			},
			&cli.BoolFlag{
				Name:    "Lowercase",
				Aliases: []string{"lc"},
				Usage:   "Include lowrecase characters",
				Value:   true,
			},
			&cli.BoolFlag{
				Name:    "Numbers",
				Aliases: []string{"n"},
				Usage:   "Include numbers",
				Value:   false,
			},
			&cli.BoolFlag{
				Name:    "Symbols",
				Aliases: []string{"s"},
				Usage:   "Include symbols",
				Value:   false,
			},
		},
		Name:  "Password Generator",
		Usage: "Generate passwords",
		Action: func(c *cli.Context) error {
			var length int
			var uppercase bool
			var lowercase bool
			var numbers bool
			var symbols boola

			fmt.Println(length)

			return nil
		},
	}

	err := app.Run(os.Args)

	if err != nil {
		log.Fatal(err)
	}

}
