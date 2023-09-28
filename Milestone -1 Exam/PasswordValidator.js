// user for their password
const password = prompt("Enter Your Password");

// user to confirm password
const confirmPassword = prompt("Confirm Your Password");

// check the password
if (password === confirmPassword){
    console.log("Password Matched Successfully, Password validation successful. ");
}
else{
    console.log("Password didn't Matched, Password validation unsuccessful. ");
}

