let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/; // Change this line
let result = hello.replace(wsRegex, '$2'); // Change this line