const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  let count = 0;
  for (const person in allUsers) {
    if (allUsers[person].online === true) {
      count += 1;
    } 
  } return count;
}

console.log(countOnline(users));
