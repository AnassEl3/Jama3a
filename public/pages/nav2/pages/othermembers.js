function chooseparty(e,choice){
    let partyimg = e.parentElement.parentElement.querySelector(".party img");
    console.log(partyimg);
    switch (choice) {
        case 1:
            partyimg.setAttribute("src","../img/parties/1.png");
            break;
        case 2:
            partyimg.setAttribute("src","../img/parties/2.png");
            break;
        case 3:
            partyimg.setAttribute("src","../img/parties/3.jpg");
            break;
        case 4:
            partyimg.setAttribute("src","../img/parties/4.png");
            break;
        case 5:
            partyimg.setAttribute("src","../img/parties/5.jpg");
            break;
        default:
            partyimg.setAttribute("src","../img/parties/noparty.gif");
            break;
    }
}