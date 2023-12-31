function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    video.position(100,150);
    canvas = createCanvas(550,550);
    canvas.position(860,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#FF0000');
}

function modelLoaded(){
    console.log("Posenet is Initialized!");
}

function gotPoses(){
    if(results.length>0){
        console.log(results);
    }
}