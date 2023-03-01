const openNav = (ev) =>{
    document.querySelector("#sidebar").style.width = "250px";
    document.querySelector("header").style.backgroundColor = "#D4D4D4";
    document.querySelector("body").style.backgroundColor = "#D4D4D4";
    document.querySelector("#twitter").style.filter = "brightness(50%)";
}

const closeNav = (ev) =>{
    document.querySelector("#sidebar").style.width = "0px";
    document.querySelector("header").style.backgroundColor = "white";
    document.querySelector("body").style.backgroundColor = "initial";
    document.querySelector("#twitter").style.filter = "initial";
}

document.querySelector(".fa-bars").onclick = openNav;
document.querySelector(".fa-x").onclick = closeNav;
document.querySelector("#sidebar, .selected").onclick = closeNav;
