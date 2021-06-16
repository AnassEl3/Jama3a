//---------------------------------------- Modify button ------------------------------------------
const   modifierbutton = document.querySelector(".account .infos #modifybtn");
let buttonstat = 0;
modifierbutton.addEventListener("click",(e)=>{
    e.preventDefault();
    const inputs = e.target.parentNode.querySelectorAll(".profileinfo");
    const validebutton = e.target.parentNode.querySelector("#validatebtn");
    if(buttonstat == 0){
        Array.from(inputs).forEach((el)=>{el.removeAttribute("disabled")});
        modifierbutton.setAttribute("value","الغاء");
        validebutton.classList.replace("hidebtn","showbtn");
        buttonstat++;
    }else{
        e.target.parentNode.reset();
        Array.from(inputs).forEach((el)=>{el.setAttribute("disabled","")});
        modifierbutton.setAttribute("value","تعديل");
        validebutton.classList.replace("showbtn","hidebtn");
        buttonstat=0;
    }
})
/*--------------------------------- accountactions -------------------------------------------------------------------------*/
const   choices = document.querySelectorAll(".accountactions .choices .choice"),
        actions = document.querySelectorAll(".accountactions .actionspace .action");


choices.forEach((e,p)=>{
    let position = p;
    e.addEventListener("click",(e)=>{
        choices.forEach((e)=>{e.classList.remove("chosen");});
        e.target.classList.add("chosen");
        
        Array.from(actions).forEach((e,i)=>{
            e.classList.remove("showaction");
            if(i === p){
                e.classList.add("showaction"); 
            }
        });
})});