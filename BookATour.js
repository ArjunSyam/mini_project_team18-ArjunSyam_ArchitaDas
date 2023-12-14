function checkfield(){
    var firstname = document.getElementById("FirstName");
    var lastname = document.getElementById("LastName");
    var DOB = document.getElementById("Datebirth");
    var email = document.getElementById("email");
    var DOA = document.getElementById("DateOfTravel-Arrival");
    var DOD = document.getElementById("DateOfTravel-Departure");
    var members = document.getElementById("Members");

    var required = [firstname,lastname,DOB,email,DOA,DOD,members];
    var field = document.getElementById("not-all");
    let count = 0;

    for(let i=0;i<required.length;i++)
    {
        if(required[i].value.length == 0)
        {
            required[i].style.border = "1px solid red";
            field.style.display = "block";
            count=1;

        }

        else
        {
            required[i].style.border = "0.5px solid rgb(82, 79, 79)";
        }
    }

    if(count)
    {
        return false;
    }

    else{
        alert("Form Submited");
    }


}