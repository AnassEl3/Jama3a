//------------------------------------ secondpart ----------------------------------------
var imgs = document.querySelector(".secondpart .imgsshow .imgs"),
    img = imgs.querySelectorAll("a"),
    nextbtn = imgs.querySelector(".nextbtn"),
    previousbtn = imgs.querySelector(".previousbtn");

for(const [index, value] of img.entries()){
    if(index === 0){
        value.classList.add("p1");
    }else if(index === 1){
        value.classList.add("p2");
    }else if(index === 2){
        value.classList.add("p3");
    }else{
        value.classList.add("nextp");
    }
}

function nextimg(){
    let img1 = imgs.querySelector(".p1"),
        img2 = imgs.querySelector(".p2"),
        img3 = imgs.querySelector(".p3");
    if(img3.nextElementSibling.nodeName === "A"){
        img1.classList.remove("p1","p2","p3","nextp","previoustp");
        img1.classList.add("previoustp");
        img2.classList.remove("p1","p2","p3","nextp","previoustp");
        img2.classList.add("p1");
        img3.classList.remove("p1","p2","p3","nextp","previoustp");
        img3.classList.add("p2");
        img3.nextElementSibling.classList.remove("p1","p2","p3","nextp","previoustp");
        img3.nextElementSibling.classList.add("p3");
    }else{
        for(const [index, value] of img.entries()){
            if(index === 0){
                value.classList.remove("p1","p2","p3","nextp","previoustp");
                value.classList.add("p1");
            }else if(index === 1){
                value.classList.remove("p1","p2","p3","nextp","previoustp");
                value.classList.add("p2");
            }else if(index === 2){
                value.classList.remove("p1","p2","p3","nextp","previoustp");
                value.classList.add("p3");
            }else{
                value.classList.remove("p1","p2","p3","nextp","previoustp");
                value.classList.add("nextp");
            }
        }
    }
}

function previousimg(){
    let firstimg =imgs.querySelector("a"),
        img1 = imgs.querySelector(".p1"),
        img2 = imgs.querySelector(".p2"),
        img3 = imgs.querySelector(".p3");
    if(img1 != firstimg){
        img1.previousElementSibling.classList.remove("p1","p2","p3","nextp","previoustp");
        img1.previousElementSibling.classList.add("p1");
        img1.classList.remove("p1","p2","p3","nextp","previoustp");
        img1.classList.add("p2");
        img2.classList.remove("p1","p2","p3","nextp","previoustp");
        img2.classList.add("p3");
        img3.classList.remove("p1","p2","p3","nextp","previoustp");
        img3.classList.add("nextp");
    }else{
        let arrayimgs = Array.from(img);
        arrayimgs.forEach((value,index)=>{
            if(index === arrayimgs.length-1){
                for(let i of arrayimgs){
                    i.classList.remove("p1","p2","p3","nextp","previoustp");
                    i.classList.add("previoustp");
                }
                value.classList.remove("p1","p2","p3","nextp","previoustp");
                value.classList.add("p3");
                value.previousElementSibling.classList.remove("p1","p2","p3","nextp","previoustp");
                value.previousElementSibling.classList.add("p2");
                value.previousElementSibling.previousElementSibling.classList.remove("p1","p2","p3","nextp","previoustp");
                value.previousElementSibling.previousElementSibling.classList.add("p1");
            }
        });
    }
}

nextbtn.addEventListener("click",nextimg);
previousbtn.addEventListener("click",previousimg);
setInterval(nextimg,5000);