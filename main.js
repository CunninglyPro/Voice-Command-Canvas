var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

function start() {
    document.getElementById("status").innerHTML = "System is recording, please tell the shape to draw.";
    recognition.start();
}

function setup() {
    canvas = createCanvas(900, 600);
}

recognition.onresult = function(event) {
    console.log(event);
}
var content = event.results[0][0].transcript;
document.getElementById("status").innerHTML = "Your shape recognized is : " + content;

if (content == "Circle") {
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Started drawing circle.";
    draw_circle = "set";
}

if (content == "rectangle") {
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Started drawing rectangle.";
    draw_rect = "set";
}

function draw() {
    if (draw_circle == "set") {
        console.log("hello");
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        draw_circle = "";
    }

    if (draw_rect == "set") {
        rect(x, y, 70, 50);
        draw_rect = "";
    }
}