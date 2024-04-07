document.addEventListener("DOMContentLoaded", function(){
    const screenSaver= document.getElementById("screenSaver");

    function createCircle(){
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circle.style.left= Math.random()* window.innerWidth +"px";
        circle.style.top= Math.random() * window.innerHeight + "px";

        circle.style.background = "rgb({$Math.random() * 255},
        $Math.random() * 255}, ${Math.random()*255});

        screenSaver.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },500);
    setInterval(createCircle,100);
