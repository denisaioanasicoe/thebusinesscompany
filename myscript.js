 var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex -= n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1
        }    
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block";  
      
    }


var coll = document.getElementsByClassName("container");

var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    
    var box = this.firstElementChild;
    var content = this.nextElementSibling;
       box.style.backgroundColor = "black"
      if (content.style.maxHeight){
      content.style.maxHeight = null;
     box.style.backgroundColor = "#53b8c4";
    
    } else {
              
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var coll2 = document.getElementsByClassName("collapsible2");
var k;

for (k = 0; k < coll2.length; k++) {
  coll2[k].addEventListener("click", function() {
    this.classList.toggle("active");
    var content2 = this.nextElementSibling;
    if (content2.style.maxHeight){
      content2.style.maxHeight = null;
    } else {
      content2.style.maxHeight = content2.scrollHeight + "px";
    } 
  });
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  } }

function viewMoreFunction() {
  var b1 = document.getElementById("viewmorebutton1");
  var b2 = document.getElementById("viewmorebutton2")    
  var y = document.getElementById("viewmore");
  if (y.style.display === "block") {
    y.style.display = "none";
      b1.style.display = "block";
    b2.style.display = "none";  
    
   
  } else {
    y.style.display = "block";
       b1.style.display = "none";
    b2.style.display = "block";
    
    
  } }


