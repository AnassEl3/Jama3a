//----------------------- slidesshow ----------------------------------
let slidesshow = document.querySelector(".slidesshow"),
    nextbutt = document.querySelector(".slidesshow .nextbutt"),
    previousbutt = document.querySelector(".slidesshow .previousbutt"),
    slides = document.querySelectorAll(".slidesshow .slide"),
    slidestitles = document.querySelectorAll(".slidesshow .slidetitle");
let p = 0;

for(const [index, value] of slides.entries()){
    if(index === 0){
        value.classList.add("nextslideO");
    } else{
        value.classList.add("nextslideC");
    }
}

document.querySelector(".slidesshow .slidetitle").classList.add("showtitle");
function getnextslide(){
    for(const [index, value] of slides.entries()){
       if(p === slides.length -1){
            value.classList.remove("nextslideO","nextslideC","previousslideO","previousslideC");
            value.classList.add("nextslideO");
            for(const [index2, value2] of slides.entries()){
                if(index2 === slides.length -1){
                    value2.classList.remove("nextslideO","nextslideC","previousslideO","previousslideC");
                    value2.classList.add("nextslideC");
                }
            }
            for(const [index2, value2] of slidestitles.entries()){
                if(index2 === 0){
                    value2.classList.add("showtitle");
                }else if(index2 === slides.length -1){
                    value2.classList.remove("showtitle");
                }
            }
            p=0;
            break;
        }else if(index === p){
            value.classList.remove("nextslideO","nextslideC","previousslideO","previousslideC");
            value.classList.add("nextslideC");
            value.nextElementSibling.nextElementSibling.classList.remove("nextslideO","nextslideC","previousslideO","previousslideC");
            value.nextElementSibling.nextElementSibling.classList.add("nextslideO");
            value.nextElementSibling.classList.remove("showtitle");
            value.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("showtitle");
            p++;
            break;
        }
    }
}
function getpreviousslide(){
    for(const [index, value] of slides.entries()){
        if(p <= 0){
            value.classList.remove("nextslideO","nextslideC","previousslideO","previousslideC");
            value.classList.add("previousslideC");
            for(const [index2, value2] of slides.entries()){
                if(index2 === slides.length -1){
                    value2.classList.remove("nextslideO","nextslideC","previousslideO","previousslideC");
                    value2.classList.add("previousslideO");
                }
            }
            for(const [index2, value2] of slidestitles.entries()){
                if(index2 === 0){
                    value2.classList.remove("showtitle");
                }else if(index2 === slides.length -1){
                    value2.classList.add("showtitle");
                }
            }
            p = slides.length -1 ;
            break;
        }else if(index === p){
            value.previousElementSibling.previousElementSibling.classList.remove("nextslideO","nextslideC","previousslideO","previousslideC");
            value.previousElementSibling.previousElementSibling.classList.add("previousslideO");
            value.classList.remove("nextslideO","nextslideC","previousslideO","previousslideC");
            value.classList.add("previousslideC");
            value.previousElementSibling.classList.add("showtitle");
            value.nextElementSibling.classList.remove("showtitle");
            p--;
            break;
        }   
    }
}
nextbutt.addEventListener("click",getnextslide);
previousbutt.addEventListener("click",getpreviousslide);

setInterval(getnextslide,10000);

//----------------------- informations ----------------------------------
let thedefinitions = document.querySelectorAll(".informations .definitions .definition");
for(let e of thedefinitions){
    let status = 0;
    e.querySelector(".pull").addEventListener("click",function (e){  
        if(status === 0){
            for(let k of thedefinitions){
                k.querySelector(".pull").classList.remove("pullclicked");
                k.querySelector(".text").classList.remove("pulltext");
                status=0;
            }
            e.target.classList.add("pullclicked");
            e.target.parentNode.querySelector(".text").classList.add("pulltext");
            status++;
        }else{
            e.target.classList.remove("pullclicked");
            e.target.parentNode.querySelector(".text").classList.remove("pulltext");
            status=0;
        }
    });
}