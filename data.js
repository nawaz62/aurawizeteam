/*
  This file handles all stored data
  We use localStorage instead of backend
*/

// Load users from browser memory
let users = JSON.parse(localStorage.getItem("users")) || [];

// Load maintenance requests
let requests = JSON.parse(localStorage.getItem("requests")) || [];

// Save everything back to localStorage
function save(){
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("requests", JSON.stringify(requests));
}
