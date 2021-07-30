console.log('Welcome to the Password validator tool!')

const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
r1.question(`What is the password you would like to check?`, (password) => {
    r1.question(`Thank you please reenter the password`, password2 => {
      if(password.length < 10 || password.length > 18){
        console.log(`Your password, ${password} is ${password.length} characters long. It must be between 10 and 18 characters, please try again.`)
      } else if(password !== password2) {
        console.log('Your passwords did not match')
      } else {
        console.log(`Your password, ${password} is ${password.length} characters long and will work`)
      }
      r1.close()
    })
  })
