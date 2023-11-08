let repeatNum = "42 42 42";
let reRegex = /^(\d+)( )\1\2\1$/;
let result = reRegex.test(repeatNum);
