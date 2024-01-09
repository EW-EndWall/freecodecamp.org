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
  // Only change code below this line
  let online = 0;
  for(let user in allUsers){
    if(allUsers[user].online) {
      online++;
    }
  }
  return online;
  // Only change code above this line
}

console.log(countOnline(users));