function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();

function showmenu(){
    document.getElementById("navbar").style.right="0%";
    document.getElementById("navbar").style.opacity=1;
    document.getElementById("nav-links").style.opacity=1;
    document.getElementById("nav-links").style.marginLeft="20%";
    document.getElementById("hide").style.display="block";
}

function hidemenu(){
    document.getElementById("navbar").style.right="-120%";
    document.getElementById("navbar").style.opacity=0;
    document.getElementById("nav-links").style.opacity=0;
    document.getElementById("nav-links").style.marginLeft="120%";
    document.getElementById("hide").style.display="none";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


