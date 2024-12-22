
function validateForm() {
   
    var email = document.getElementById('mail').value;
    var password = document.getElementById('password').value;

  
    if (email == "" || password == "") {
        alert("Both fields are required.");
        return false; 
    }
    return true;
}
