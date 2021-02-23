

const tapHere1 = document.querySelector("#image-tap-here1");
const tapHere2 = document.querySelector("#image-tap-here2");

function slide(){
    document.querySelector('.slide-1').style.transform = "translateX(-600px)";
    document.querySelector('.slide-2').style.transform = "translateX(600px)";
}

function playVideo(){
    document.querySelector(".video").play();

    setTimeout(() => {
        // document.querySelector(".video").setAttribute("controls", "");
        document.querySelector(".starter").addEventListener('click', playVideo);
    }, 22000);
    
}


// tap either left tep here gif or right gif
tapHere1.addEventListener('click', ()=>{
    slide();
    playVideo();
});
tapHere2.addEventListener('click', ()=>{
    slide();
    playVideo();
});


