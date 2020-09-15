function myMenu() {
  var x = document.getElementById("roll-down-mobile-menu");
  
  var closebttn = document.getElementById("close-bttn");
  var burger = document.getElementById("cheese-burger-menu");

  if (x.style.height == "0vh") {
    x.style.height = "100vh";
    x.style.transition = ".5s";

   

    burger.style.display = "none";
    closebttn.style.display = "block";
  } else {
    closebttn.style.display = "none";
    burger.style.display = "block";

    x.style.height = "0vh";
    x.style.transition = ".7s";

    
  }
}
