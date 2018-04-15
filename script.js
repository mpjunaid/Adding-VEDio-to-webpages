
function openNav() {
    document.getElementById("slide2").style.display= "block";
	document.getElementById("slide1").style.display= "none";

}
function closeNav() {
    document.getElementById("slide2").style.display= "none";
	document.getElementById("slide1").style.display= "block";

}
function valid1()
{
var x = document.forms["myForm"]["name"].value;
var y = document.forms["myForm"]["pass"].value;

    if (x != "name") {
        alert("USER NAME IS WRONG");
        return false;
    }
	else
	 if (y != "pass") {
        alert("PASSWORD IS WRONG");
        return false;
    }
	else{
	alert("LOGIN SUCCESSFULL");
        return true;
	}

}
