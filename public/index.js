//----------------------- nav ----------------------------------
window.onload = function() {stickynav()};
window.onscroll = function() {stickynav()};
var navbar = document.querySelector("nav");
var navlocation = navbar.offsetTop;
let i = 0;
function getsmallnav(e){
    if(i === 0){
      e.target.classList.add("showsmallnav");
      document.querySelector("#workspace").style.margin = "70px 0 0 0";
      i++;
    }else{
      e.target.classList.remove("showsmallnav");
      document.querySelector("#workspace").style.margin = "0";
      i--;
    }
    for(let g of e.target.querySelectorAll("a")){
      g.addEventListener("click",function (){e.target.classList.remove("showsmallnav");});
    }
}

function stickynav() {
    if (window.innerWidth <= 650) {
      navbar.classList.add("smallnav");
      navbar.addEventListener("click",getsmallnav);
      if(window.pageYOffset >= navlocation){
        navbar.classList.add("smallsticky");
        document.querySelector("#workspace").style.margin = "70px 0 0 0";
      }else{
        navbar.classList.remove("smallsticky");
        document.querySelector("#workspace").style.margin = "0";
      }
    }else{
      if(window.pageYOffset >= navlocation){
        navbar.classList.add("sticky");
        document.querySelector("#workspace").style.margin = "70px 0 0 0";
      }else{
        navbar.classList.remove("sticky");
        document.querySelector("#workspace").style.margin = "0";
      }
    }
  }
