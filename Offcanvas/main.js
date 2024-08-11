const menuIcon=document.querySelector(".menu-icon")
const cross=document.querySelector(".cross");

menuIcon.addEventListener("click",function() {
  // Tab to edit
  
  document.querySelector(".menu").classList.toggle("smenu")
})
cross.addEventListener("click",function() {
  // Tab to edit
  
  document.querySelector(".menu").classList.remove("smenu")
})


document.querySelector(".progress-item").addEventListener("click",function(event){
  
 event.target.classList.toggle("go-right")
 
 document.querySelector("nav").classList.toggle("progressColorChange");
document.querySelector(".menu").classList.toggle("progressColorChange");

sp=document.querySelector(".dark-red span");
if(sp.innerHTML=="Dark Now"){
  sp.innerHTML="HotPink Now"
}
else{
  sp.innerHTML="Dark Now"
}
  
}
)