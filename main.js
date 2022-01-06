object = [];
status = "";
img = "";
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectdetecter = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}
function preload(){
    img = loadImage('dog_cat.jpg');
}
function draw(){
    image(img,0,0,640,420);
    console.log("i am in draw function");
    if(status != ''){
        console.log("i am inside if");
        for(i=0; i < object.length; i++){
            console.log("I am inside forloop");
            document.getElementById('status').innerHTML = 'Status: Detecting objects';
            percent = floor(object[i].confidence * 100);
            fill('#980045');
            text(object[i].label,object[i].x,object[i].y);
            noFill();
            stroke('#980045');
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
    
}

function modelLoaded(){
    console.log("cocossd is loaded");
    status = true;
    objectdetecter.detect(img,gotResults)
    object = results;

}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
      console.log(results);
    }
}




