img="";
status1="";
objects=[];
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
canvas=createCanvas(650,500);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelloaded);
document.getElementById("status").innerHTML="Status:Detecting Objects";

}
function draw(){
image(img,0,0,650,500);
if(status1!=""){
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status: object detected";
        fill("#ad1840");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+ percent +"%",objects[i].x+20,objects[i].y + 20);
        noFill();
        stroke("#ad1840");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

    }
}
}
function modelloaded(){
    console.log("modelloaded");
    status1=true;
    objectDetector.detect(img,gotresult);

}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;

}