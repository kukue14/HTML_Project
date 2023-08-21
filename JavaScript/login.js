var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
    response => response.json()
  ).then((html) => {
    // you can put any JS code here
   
// Get input values
var username = document.getElementById("username").value;
var rollno = document.getElementById('rollno').value;

var usernameCheck = /^[A-Za-z\sA-Za-z]+$/;


// Perform simple validation (you should do more robust validation on the server-side)
if (!usernameCheck.test(username) || !rollno) {
document.getElementById("loginStatus").innerHTML = "Please enter both username and roll no.";
return;
}

// Simulate a server-side login check (you should replace this with actual server-side validation)
// In this example, we assume the username is "admin" and the password is "password"
if (rollno > 21737 && rollno < 22581) {


window.location= "index.html"; // Redirecting to other page.
return false;

} else {
document.getElementById("loginStatus").innerHTML = "Login failed. Your're not in Semester-3.";
}

  });
});