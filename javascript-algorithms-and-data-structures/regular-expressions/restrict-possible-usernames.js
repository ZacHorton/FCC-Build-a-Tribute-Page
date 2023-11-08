let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}$|^[a-z]+[0-9]{2}$|^[a-z]{2,}[0-9]?$/i;
let result = userCheck.test(username);
