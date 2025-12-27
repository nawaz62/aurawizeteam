/*
  This file manages Login, Signup and Logout
*/

// Switch between login and signup screens
function toggleAuth(){
  loginBox.classList.toggle("hidden");
  signupBox.classList.toggle("hidden");
}

// Create new account
function signup(){
  users.push({
    email: signupEmail.value,
    pass: signupPass.value
  });

  save();
  alert("Account created successfully!");
  toggleAuth();
}

// Login user
function login(){
  let user = users.find(
    u => u.email === loginEmail.value &&
         u.pass === loginPass.value
  );

  if(user){
    loginBox.classList.add("hidden");
    app.classList.remove("hidden");
    render();
  }else{
    alert("Invalid email or password");
  }
}

// Logout
function logout(){
  location.reload();
}
