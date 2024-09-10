$(function(){
    $("span").click(function(){
        $("nav").toggle(150);
        $("#color").toggle(1000);
        $("#blue").toggle(800);
        $("#yellow").toggle(600);
        $("#audio").play();
    })
    let audio = document.getElementById("audio")
    let but = document.querySelector("span");
    but.addEventListener("click",function(){
        audio.play();
    })
    
})