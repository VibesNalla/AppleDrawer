x = 0;
y = 0;

draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function setup()
{
    canvas = createCanvas(900,600);
}

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Speech has been recognized as: "+content;

    if(content=="Circle")
    {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML = "Started Drawing Circle";
        draw_circle = "set";
    }

    if(content=="rectangle")
    {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);

        document.getElementById("status").innerHTML = "Started Drawing Rectangle";
        draw_rect = "set";
    }
}

function draw()
{
    if(draw_circle=="set")
    {
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);

        document.getElementById("status").innerHTML = "Circle is drawn!";
        draw_circle = "";
    }

    if(draw_rect=="set")
    {
        
        rect(x,y,50,20);

        document.getElementById("status").innerHTML = "Rectangle is drawn!";
        draw_rect = "";
    }
    }

