// index.js
const os = require('os');

function sayHello(name = "dev") {
  return `👋 Hello ${name} from ${os.platform()} with Node ${process.version}`;
}

if (require.main === module) {
  console.log(sayHello("youness"));
}

module.exports = { sayHello };
