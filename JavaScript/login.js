function login() {
    var login = document.getElementById('rollnum').value;
    if(login > 0 && login < 100) {
        alert("You are Semester-3");
        document.getElementById('toIndex').innerHTML;
    }
    else alert("You aren't Semester-3. This website is just for Semester-3.");
}
