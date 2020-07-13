let basicModel

async function loadModel(path) {
    const model = await tf.loadLayersModel(path);
    return model
}

loadModel('models/basic_model_js/model.json')
.then(model => {
    basicModel=model
    console.log("Model Loaded :)")
} )

function getTensor(rawArray) {
    tensor = tf.tensor(rawArray)
    tensor = tensor.div(tf.scalar(255))
    return tensor
}

function predictBasicModel(imgTensor) {
    input = imgTensor.reshape([1,28,28])
    predictions = basicModel.predict(input)
    return getDigit(predictions)

}

function getDigit(predTensor) {
    let predArr = predTensor.arraySync()[0]
    let highestConfidence = Math.max(...predArr)
    let digit = predArr.indexOf(highestConfidence)

    output = {digit, predArr}
    return output
}

// moist