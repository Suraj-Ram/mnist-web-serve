let drawCanvas = new p5(digitDrawCanvas, 'drawCanvasContainer')

let selectedModel = 'MLP'

selectModel('MLP')

function predictDigit() {
    let prediction

    if (selectedModel === 'MLP') {
        prediction = predictBasicModel(getTensor(drawCanvas.getRawArray()))
    }
    if (selectedModel === 'CNN') {
        prediction = predictCnnModel(getTensor(drawCanvas.getRawArray()))
    }


    
    console.log(prediction)

    let oneHotString = prediction.predArr
    oneHotString[prediction.digit] = `<strong class='text-primary'>${oneHotString[prediction.digit]}</strong>`

    document.getElementById('digit').innerHTML = prediction.digit
    document.getElementById('oneHot').innerHTML = oneHotString
    document.getElementById('modelType').innerHTML = selectedModel
}

function selectModel(model) {
    selectedModel = model
    if(selectedModel === 'MLP') {
        document.getElementById('mlpLabel').className = `btn btn-primary active`
        document.getElementById(`cnnLabel`).className = `btn btn-secondary`  
    }
    if(selectedModel === 'CNN') {
        document.getElementById('cnnLabel').className = `btn btn-primary active`
        document.getElementById(`mlpLabel`).className = `btn btn-secondary`  
    }
    console.log(selectedModel)
}

function handleLivePredict() {
    drawCanvas.livePredict = document.getElementById('livePredict').checked
    console.log(drawCanvas.livePredict)
    document.getElementById('predictButton').disabled = drawCanvas.livePredict
}