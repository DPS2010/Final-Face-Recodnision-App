Webcam.set({
    height: 300,
    width: 300,
    image_format:"jpeg",
    jpeg_quality:90
})
Webcam.attach("#camera")
function capture() {
    Webcam.snap(
        function(img){
            document.getElementById("snapshot").innerHTML = `<img id="capturedimage" src=${img}>`
            
        }
    )
}
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3PqDIIEzwq/model.json",getModel)
function getModel () {
    console.log("Model Uploaded")
}

function identify() {
    image=document.getElementById("capturedimage")
    classifier.classify(image, gotResult)
}
function gotResult(error, result) {
    if (error) {
        console.error(error)
    }else {
       document.getElementById("accuracyResult").innerHTML = result[0].confidence
       document.getElementById("personResult").innerHTML = result[0].label
       
    }
}