function submit() {
    var email = document.getElementById('email').value;
    var pass1 = document.getElementById('pass1').value;//

    var lcEmail = email.toLowerCase(); // lowercased Email

    if(email == "" || pass1 == "")
    {
        alert("Some fields are missing");
    }
    else if ( lcEmail == "sashmir.yap@dlsu.edu.ph" && pass1 == "abcd1234") {
        alert("Hello Sashmir Yap!");

        window.open("../editHtml/edit.html","_self")
        close;
    }
    else if (lcEmail == "renji_ong@dlsu.edu.ph" && pass1 == "abcd1234"){
        alert("Hello Renji Ong!");

        window.open("../editHtml/edit.html","_self")
        close; 
    }
    else{
        alert("Password or email is wrong!");
    }
}

function guest(){

    window.open("../main.html","_self")
}