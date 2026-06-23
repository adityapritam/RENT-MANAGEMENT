let home=document.getElementById("home");
home.addEventListener("click",function(){
    window.location.href = "../html/index.html#pgsection";
});
let browse=document.getElementById("browse");
browse.addEventListener("click",()=>{
    window.location.href = "../html/index.html#pgg-2";
});
let contact=document.getElementById("contact");
contact.addEventListener("click",()=>{
    window.location.href = "../html/index.html#foot-1";
});
let about=document.getElementById("about");
about.addEventListener("click",()=>{
    console.log("loading");
});

document.getElementById("dhome").addEventListener("click",()=>{
    home.click();
    document.querySelector(".disappear").classList.remove("active");
});
document.getElementById("dbrowse").addEventListener("click",()=>{
    browse.click();
    document.querySelector(".disappear").classList.remove("active");
});
document.getElementById("dcontact").addEventListener("click",()=>{
    contact.click();
    document.querySelector(".disappear").classList.remove("active");
});
document.getElementById("dabout").addEventListener("click",()=>{
    about.click();
    document.querySelector(".disappear").classList.remove("active");
});