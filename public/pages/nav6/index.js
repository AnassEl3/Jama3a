//----------------------- partnerships ----------------------------------
let partnerships = document.querySelector(".partnerships"),
    partnershipstypes = document.querySelectorAll(".partnerships .partnership");

document.querySelector(".partnerships .partnership").querySelector(".description").classList.add("showdescription");

function showpartnershi(e){
    for(i of partnershipstypes){
        i.querySelector(".description").classList.remove("showdescription");
    }
    e.target.nextElementSibling.classList.add("showdescription");
}
partnershipstypes.forEach((v)=>{
    v.querySelector("h3").addEventListener("click",showpartnershi);
});