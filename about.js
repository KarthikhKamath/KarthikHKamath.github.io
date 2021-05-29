var cursor = document.querySelector(".cursor")
var links = document.querySelectorAll(".link")
var logo = document.querySelector(".logo")
var about = document.querySelector(".about h2")
var p = document.querySelector(".about p")

window.addEventListener("mousemove",movement)
function movement(e){
    cursor.style.top = e.pageY +"px"
    cursor.style.left = e.pageX +"px"    
}
links.forEach(links => {
    links.addEventListener("mouseover", function(){
    cursor.classList.add("grow")
    })
     links.addEventListener("mouseleave", function(){
    cursor.classList.remove("grow")
    })
})
    about.addEventListener("mouseover", function(){
    cursor.classList.add("grows")
    
    })
     about.addEventListener("mouseleave", function(){
    cursor.classList.remove("grows")
    })
    
    p.addEventListener("mouseover", function(){
    cursor.classList.add("grow")
    
    })
     p.addEventListener("mouseleave", function(){
    cursor.classList.remove("grow")
    })

    let spinnerWrapper = document.querySelector('.spinner-wrapper');
    window.addEventListener('load',function(){
    spinnerWrapper.style.opacity = 0;    
    });