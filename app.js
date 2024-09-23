for(var i=0; i<3; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){

        var text =this.innerHTML;
        console.log(text);
        audioplay(text);
        playAnimation(text)


        
        
    });
}



// function colorChange(ahammod){
    // console.log(e.style.color = "red");


    // ahammod.style.boxShadow = "5px 5px 7px tomato"
    



function audioplay(text){

    switch(text){
        case "a":
        var audio = new Audio("./sounds/A.wav");
        audio.play();
        break;
    
        case "b":
        var audio = new Audio("./sounds/B.wav");
        audio.play();
        break;
    
        case "c":
            var audio = new Audio("./sounds/C.wav");
            audio.play();
    }

}


function playAnimation(text){
    var selectedButton= document.querySelector("."+text);
    selectedButton.classList.add("anim");

}


