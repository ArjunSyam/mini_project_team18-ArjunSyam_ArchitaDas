function CheckData(){
    var userbox = document.getElementById("username");
    var passbox = document.getElementById("password");
    var enteruser = document.getElementById("username").value;
    var enterpass = document.getElementById("password").value;
    var user_error = document.getElementById("user-incorrect");
    var pass_error = document.getElementById("pass-incorrect");

    console.log(enteruser);
    console.log(enterpass);

    var getuser = localStorage.getItem('username');
    var getpass = localStorage.getItem('password');

    if(enteruser == getuser)
    {
        if(enterpass == getpass)
        {
            alert("Login Successful");
        }

        else
        {
            userbox.style.border = "2px solid rgba(255,255,255, .2)";
            user_error.style.display = "none";

            passbox.style.border = "2px solid red";
            pass_error.style.display = "block";
            passbox.focus();
            return false;
        }
        
    }

    else
    {
        if(enterpass == getpass)
        {
            passbox.style.border = "2px solid rgba(255,255,255, .2)";
            pass_error.style.display = "none";

            userbox.style.border = "2px solid red";
            user_error.style.display = "block";
            userbox.focus();
            return false;
        }

        else
        {
            userbox.style.border = "2px solid red";
            user_error.style.display = "block";
            userbox.focus();

            passbox.style.border = "2px solid red";
            pass_error.style.display = "block";
            passbox.focus();
            return false;
        }
    }


}