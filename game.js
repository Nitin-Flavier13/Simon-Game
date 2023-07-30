// alert("hello"); 

var color = ["red","blue","green","yellow"],pattern=[];
var play = 1,lvl=0,machine=0,counter=0,seq_count=0;

// main game function
$(document).keypress(function(){
    if(play)
    {
        play = 0;
        $("h1").text("Level "+lvl);
        nextSequence();
    }
});

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}

$(".btn").click(function(){
    // let userChoosenColor = this.id;   we can also use this
    if(machine)
    {
        let userChoosenColor = $(this).attr("id");
        if(userChoosenColor == pattern[counter])
        {
            animatePress(userChoosenColor);
            sound(userChoosenColor);
            counter++;
            if(counter == pattern.length)
            {
                machine = 0;
                counter=0;
                setTimeout(nextSequence,1000);
            }
        }
        else{
            $("h1").text("Game Over Press anykey to Start !");
            play = 1;
            sound("wrong");
            lvl = 0;
            machine=0
        }

    }
     
})

// sound("green");

function nextSequence() {
    machine = 1;

    let index = Math.floor(0 + Math.random() * (3 - 0 + 1));
    var randomColor = color[index];
    pattern.push(randomColor);
    var str = "#"+pattern[seq_count];
    seq_count++;
    lvl += 1;
    $(str).fadeIn(200).fadeOut(200).fadeIn(200);
    sound(pattern[0]);
    $("h1").text("Level " + lvl);
}



function sound(ele)
{
    switch(ele){
        case "blue":
            audio = new Audio("./sounds/blue.mp3");
            audio.play();
            break;   
        case "green":
            audio = new Audio("./sounds/green.mp3");
            audio.play();
            break;
        case "red":
            audio = new Audio("./sounds/red.mp3");
            audio.play();
            break;
        case "wrong":
            audio = new Audio("./sounds/wrong.mp3");
            audio.play();
            break;
        case "yellow":
            audio = new Audio("./sounds/yellow.mp3");
            audio.play();
            break;
        default: 
    }
}




    


