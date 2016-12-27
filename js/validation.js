/**
 * Created by Dark on 11/30/2016.
 */
function validateSignUp() {
    var form = document.forms["signUp"].value;
    var name = form["name"].value;
    var pass = form["pass"].value;
    var repeatPass = form["repeatPass"].value;
    var email = form["email"].value;
    var msg = "";
    var validated = true;
    window.alert("fffff");
    window.location = "../homepage.html";
    if(repeatPass != pass)
    {
       msg = "Passwords do not match.";
       validated = false;
    }

    if(!validated) {
        window.alert(msg);
    }
    else
    {
        window.location = "../homepage.html";
    }
}