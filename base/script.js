
localStorage.setItem("username", "troy");
// Internally sets an item called 'username' with the value 'troy'.


let user = localStorage.getItem("username");
console.log(user); // 'troy'
// Grabs the item called 'username'


localStorage.removeItem("username");
// Removes the item called 'username'. It's okay no one will miss him anyways.
