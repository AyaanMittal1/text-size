var video="";
function setup(){
    canvas=createCanvas(300,200);
    canvas.position(75,150);
    video=createCapture(VIDEO);
    video.size(300,200);
    video.hide();
}
function draw(){
    image(video, 0, 0);
    
}