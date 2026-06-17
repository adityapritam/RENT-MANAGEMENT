function showmenu(button,content){
    button.addEventListener("click",()=>{
        content.classList.toggle("active");
    });
}
showmenu(document.querySelector(".hamburger"),document.querySelector(".disappear"));


window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        document.querySelector(".disappear").classList.remove("active");
    }
});