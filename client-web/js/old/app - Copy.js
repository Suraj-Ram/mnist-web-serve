imgEl = document.getElementById("image1")
rawArr = tf.browser.fromPixels(imgEl).arraySync()


let classifer

function setup() {

}

function draw() {

}

async function loadModel(path) {
    const model = await tf.loadLayersModel(path);
    return model
}

loadModel('models/basic_model_js/model.json')
.then(model => classifer=model)


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

function getPrediction(flatArr) {
    imgTensor = tf.tensor2d(flatArr, [28,28])
    inputTensor = imgTensor.reshape([1,28,28])
    finalInputTensor = inputTensor.div(tf.scalar(255))

    preds = classifer.predict(finalInputTensor)
    preds.print()
}

function getPixels() {
    let canvasArray = tf.browser.fromPixels(document.querySelector('.p5Canvas')).arraySync()
    return canvasArray
}

function getPixelArray(rawArr) {

}