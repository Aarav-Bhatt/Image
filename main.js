Webcam.set({
    width:350,
    height:300,
    dest_width:300,
    dest_height:250,
    image_format:'png',
    png_quality:90 // 0-100
    
}) 

Camera =document.getElementById("b")

Webcam.attach('#b');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("c").innerHTML = '<img id="vpa" src="'+data_uri+'">';
    });
}

console.log("ml5.version",ml5.version)

classified=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qyPYmq4QG/model.json",modelLoaded);

function modelLoaded(){
    console.log("modelLoaded")
}

function check(){
    img=document.getElementById("vpa");
    classified.classify(img,gotResults);

}

function gotResults(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        document.getElementById("d").innerHTML=results[0].label;
        document.getElementById("e").innerHTML=results[0].confidence.toFixed(3);

    }
}