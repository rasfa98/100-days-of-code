package main

import (
	"fmt"
	"math/rand"
	"time"

	"github.com/thatisuday/commando"
)

func generatePassword(length, lowercase, uppercase, symbols, numbers int) string {
	var random = rand.Seed(time.Now().UnixNano())
	// var allowedLowercaseCharacters = "abcdedfghijklmnopqrst"
	// var allowedUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	var allowedSymbols = "!@#$%&*"
	// var allowedNumbers = "0123456789"
	// var all = lowercase + uppercase + symbols + numbers

	var password = ""

	for i := 0; i < symbols; i++ {
		password += string(allowedSymbols[random.Intn(len(allowedSymbols))])
	}

	return password
}

func main() {

	commando.
		SetExecutableName("pw").
		SetVersion("1.0.0").
		SetDescription("A CLI that generates secure passwords.")

	commando.
		Register(nil).
		AddFlag("length", "password length", commando.Int, 12).
		AddFlag("uppercase", "should password contain uppercase letters", commando.Bool, 3).
		AddFlag("lowercase", "should password contain lowercase letters", commando.Bool, 5).
		AddFlag("numbers", "should password contain numbers", commando.Bool, 0).
		AddFlag("symbols", "should password contain symbols", commando.Bool, 4).
		SetAction(func(args map[string]commando.ArgValue, flags map[string]commando.FlagValue) {
			for k, v := range flags {
				fmt.Printf("flag -> %v: %v(%T)\n", k, v.Value, v.Value)
			}

		})

	commando.Parse(nil)
}
