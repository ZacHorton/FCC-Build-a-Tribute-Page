let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}[0-9]?$|^[a-z]+[0-9]{2}$/i;
let result = userCheck.test(username);
