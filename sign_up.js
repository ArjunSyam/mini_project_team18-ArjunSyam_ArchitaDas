
console.log("Hello");

function AddData(){

    console.log("hello");

    var user = document.getElementById("username");
    var pass = document.getElementById("password");

    var field = document.getElementById("not-all");
    var required = [user,pass];

    let count = 0;

    for(let i=0;i<required.length;i++)
    {
        if(required[i].value.length == 0)
        {
            required[i].style.border = "2px solid red";
            field.style.display = "block";
            count=1;

        }

        else
        {
            required[i].style.border = "2px solid rgba(255,255,255, .2)";
        }
    }

    if(count)
    {
        return false;
    }

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    
    localStorage.username = user;
    localStorage.password = pass;
    

}