package main

import (
	"fmt"

	"github.com/thatisuday/commando"
)

func main() {
	commando.
		SetExecutableName("pw").
		SetVersion("1.0.0").
		SetDescription("A CLI that generates secure passwords.")

	commando.
		Register(nil).
		AddFlag("length,len", "password length", commando.Int, 12).
		AddFlag("uppercase,up", "should password contain uppercase letters", commando.Bool, nil).
		AddFlag("lowercase,low", "should password contain lowercase letters", commando.Bool, nil).
		AddFlag("numbers,num", "should password contain numbers", commando.Bool, nil).
		AddFlag("symbols,sym", "should password contain symbols", commando.Bool, nil).
		SetAction(func(args map[string]commando.ArgValue, flags map[string]commando.FlagValue) {
			for k, v := range flags {
				fmt.Printf("flag -> %v: %v(%T)\n", k, v.Value, v.Value)
			}
		})

	commando.
		Register("info").
		SetShortDescription("generates secure passwords.").
		SetDescription("Generates secure password by allowing the user to specify different password criterias.").
		AddFlag("length,len", "password length", commando.Int, 12).
		AddFlag("uppercase,up", "should password contain uppercase letters", commando.Bool, nil).
		AddFlag("lowercase,low", "should password contain lowercase letters", commando.Bool, nil).
		AddFlag("numbers,num", "should password contain numbers", commando.Bool, nil).
		AddFlag("symbols,sym", "should password contain symbols", commando.Bool, nil).
		SetAction(func(args map[string]commando.ArgValue, flags map[string]commando.FlagValue) {
			for k, v := range flags {
				fmt.Printf("flag -> %v: %v(%T)\n", k, v.Value, v.Value)
			}
		})

	commando.Parse(nil)
}
