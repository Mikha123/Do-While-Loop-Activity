//create a program that prompts the user to enter password.
//use a do while loop keep asking for password until it maches the correct one.(set a hardcoaded correct password).
//log a success message to the console while the corect password is entered.

let correctPassword = "maikee8000";
        do {
          password = prompt("Enter your password:");
          if (password === correctPassword) {
            console.log("correct Password, access granted");
            break;
          } else {
            console.log("wrongPassword incorrect,try again.");
          }
        } while (password !== correctPassword);