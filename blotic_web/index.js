function show() {
    document.getElementById("close").style = "display:block";
    document.getElementById("navbar").style = "display:block";
    document.getElementById("stack").style = "display:none";
}
function hide() {
    document.getElementById("close").style = "display:none";
    document.getElementById("navbar").style = "display:none";
    document.getElementById("stack").style = "display:block";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
