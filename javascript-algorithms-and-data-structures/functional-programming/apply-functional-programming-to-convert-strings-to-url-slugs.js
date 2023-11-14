function urlSlug(title) {
  let lowerCaseString = title.toLowerCase();
  let splitArr = lowerCaseString.split(" ");
  let filterArr = splitArr.filter(remove => remove != "");
  let joinedString = filterArr.join("-");
  return joinedString;
}

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
