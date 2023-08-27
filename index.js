var burger = document.getElementById("burger");
var navigation = document.getElementById("navigation");

navigation.classList.toggle("dropdown");

burger.addEventListener("click",function(){
    navigation.classList.toggle("dropdown");
    document.body.style.overflow = 'hidden';
})