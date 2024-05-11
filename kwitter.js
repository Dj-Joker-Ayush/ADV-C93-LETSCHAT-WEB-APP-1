function login()
{
    uname = document.getElementById("inputname").value;
    localStorage.setItem("username" , uname);
    window.location = "kwitter_room.html";
}