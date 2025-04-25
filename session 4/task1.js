const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function askUserInfo() {
  readline.question('Full Name: ', (fullName) => {
    readline.question('Email: ', (email) => {
      const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(email.trim())) {
        console.log('Valid Email');
      } else {
        console.log('Invalid Email');
      }
      const trimmedName = fullName.trim();
      console.log(`Trimmed Name Length: ${trimmedName.length}`);
      const reversedName = trimmedName.split('').reverse().join('');
      console.log(`Reversed Name: ${reversedName}`);
      const nameWords = trimmedName.split(/\s+/);
      if (nameWords.length > 1) {
        console.log(`First Word: ${nameWords[0]}`);
      }
      console.log(`Last 3 Characters: ${trimmedName.slice(-3)}`);
      readline.close();
    });
  });
}

askUserInfo();
