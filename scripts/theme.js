document.addEventListener("DOMContentLoaded", function() {
    
theme = localStorage.getItem("theme");

if (theme == "dark") {
    document.body.style.backgroundColor = "#005493";
    document.body.style.color = "white";
}

if (theme == "ocean") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

if (theme == "light") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

if (theme == "forest") {
    document.body.style.backgroundColor = "#013220";
    document.body.style.color = "white";
}

if (theme == "sunset") {
    document.body.style.backgroundColor = "orange";
    document.body.style.color = "white";
}

})