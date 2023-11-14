function sentensify(str) {
  let split = str.split(/\W/);
  return split.join(" ");
}

sentensify("May-the-force-be-with-you");
