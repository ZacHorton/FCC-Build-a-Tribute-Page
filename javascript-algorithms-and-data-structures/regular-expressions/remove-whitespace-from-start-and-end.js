let hello = "   Hello, World!  ";
let wsRegex = /^ +| +$/g;
let result = hello.replace(wsRegex, '')
