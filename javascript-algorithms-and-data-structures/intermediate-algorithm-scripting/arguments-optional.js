function addTogether(...args) {
  if (args.length === 2 && typeof args[0] === "number" && typeof args[1] === "number") {
    return args[0] + args[1];
  }
  else if (args.length === 1 && typeof args[0] === "number") {
    return function (y) {
      if (typeof y === "number") {
        return args[0] + y;
      }
      else {return undefined};
    };
  }
  else {
    return undefined;
  }
}
