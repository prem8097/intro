
function myfunc() {
   var click=document.getElementById("mydropdown");
    if(click.style.display =="none") {
        click.style.display ="block";
     } else {
        click.style.display ="none";
     } 
     var image = document.getElementById('down');
   if (image.src.match("icon-arrow-down")) {
       image.src = "images/icon-arrow-up.svg";
       click.style.display="block";
   }
   else {
       image.src = "images/icon-arrow-down.svg";
       click.style.display="none";
   }
     
  }
  function myfunc1() {
   var cl=document.getElementById("mydropdown1");
    if(cl.style.display =="none") {
        cl.style.display ="block";
     } else {
        cl.style.display ="none";
     } 
     var image = document.getElementById('down1');
   if (image.src.match("icon-arrow-down")) {
       image.src = "images/icon-arrow-up.svg";
       cl.style.display="block";
   }
   else {
       image.src = "images/icon-arrow-down.svg";
       cl.style.display="none";
   }
     
  }
  window.addEventListener("click",function(event)
  {
   var cll=document.getElementById("mydropdown");
   var clll=document.getElementById("mydropdown1");
   var image = document.getElementById('down');
   var image1 = document.getElementById('down1');
   if(!event.target.matches(".navitem") && cll.style.display=="block")
   {
      /*if(cll.style.display=="block")
      {*/
         cll.style.display="none";
         image.src="images/icon-arrow-down.svg";

      /*}*/
   }
   
   if(!event.target.matches(".navitem1") && clll.style.display=="block")
   {
      clll.style.display="none";
      image1.src="images/icon-arrow-down.svg";
   }
   

  });
function alertfunc()
{
    alert("Sorry!!!.Site is under maintenance")
}
  /*function changeImage()
  {
   var cll=document.getElementById("mydropdown");
   var image = document.getElementById('down');
   if (image.src.match("icon-arrow-down")) {
       image.src = "images/icon-arrow-up.svg";
       cll.style.display="block";
   }
   else {
       image.src = "images/icon-arrow-down.svg";
       cll.style.display="none";
   }
  }
  function ff()
  {
   var cl=document.getElementById("mydropdown");
   cl.style.display="none";
   var image = document.getElementById('down');
   if (image.src.match("icon-arrow-down")) {
       image.src = "images/icon-arrow-up.svg";
       cll.style.display="block";
   }
   else {
       image.src = "images/icon-arrow-down.svg";
       cll.style.display="none";
   }
  }*/
  
  
  
  