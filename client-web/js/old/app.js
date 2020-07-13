imgEl = document.getElementById("image1")


function setup() {
    createCanvas(28,28)
    background(0)
}

function draw() {

}

function mouseDragged(){
    let c = color(255, 255, 255)
    fill(c)
    noStroke()
    ellipse(mouseX/10,mouseY/10,2,2)
    //console.log({mouseX, mouseY}) 
}

function clearCanvas() {
    background(0)
}

// --------ML STUFF------------

let classifer

async function loadModel(path) {
    const model = await tf.loadLayersModel(path);
    return model
}

loadModel('models/basic_model_js/model.json')
.then(model => {
    classifer=model
    console.log("Model Loaded :)")
} )


function getData() {
    let outArr = []

    //console.log('rawArr = ')
    console.log(rawArr)

    for (i=0;i<rawArr.length;i++){
        for(j=0;j<rawArr.length;j++){

            //console.log(`Index: [${i}][${j}] = ` + rawArr[i][j][0])

            outArr.push(rawArr[i][j][0])
        }

    }

    return outArr
}

function makeTensor(flatArr) {
    tensor = tf.tensor2d(flatArr, [28,28])
    return tensor
}

// function getPrediction(flatArr) {
//     imgTensor = tf.tensor2d(flatArr, [28,28])
//     inputTensor = imgTensor.reshape([1,28,28])
//     finalInputTensor = inputTensor.div(tf.scalar(255))

//     preds = classifer.predict(finalInputTensor)
//     preds.print()
// }
// --------------------------------------------------
function getPixels() {
    let canvasArray = tf.browser.fromPixels(document.querySelector('.p5Canvas')).arraySync()
    return canvasArray
}

function getPixelsP5() {
    loadPixels()
    let p = pixels
    updatePixels()
    return p
}

function getPixelArray(canvasArray) {
    let flatArr = []

    //console.log('rawArr = ')
    console.log(canvasArray)

    for (i=0;i<canvasArray.length;i++){
        for(j=0;j<canvasArray.length;j++){
            outArr.push(canvasArray[i][j][0])
        }

    }
    return flatArr
}

function makeInput(flatArr) {
    let imgTensor = tf.tensor2d(flatArr, [28,28])
    let inputTensor = imgTensor.reshape([1,28,28])
    let finalInputTensor = inputTensor.div(tf.scalar(255))
    return finalInputTensor
}

function getPrediction(inputTensor) {
    let preds = classifer.predict(inputTensor)
    //add here to give a proper output
    return preds.arraySync()
}