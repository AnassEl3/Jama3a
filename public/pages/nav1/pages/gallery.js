//----------------------- img ----------------------------------
let allimgs = $(".imgs .allcontent a"),
    imgshow = $(".imgs .showcontent img"),
    currentimg;

allimgs.click(function (e){ 
    e.preventDefault();
    currentimg = $(this).children("img").attr("src");
    imgshow.attr("src",currentimg);
    imgshow.parent().attr("href",currentimg);
});
//----------------------- video ----------------------------------
let allvideos = $(".videos .allcontent a"),
    videoshow = $(".videos .showcontent video"),
    currentvideo;

allvideos.click(function (e){ 
    e.preventDefault();
    currentvideo = $(this).children("video").attr("src");
    videoshow.attr("src",currentvideo)
});