let drawCanvas = new p5(digitDrawCanvas, 'drawCanvasContainer')

function predictDigit() {
    const prediction = predictBasicModel(getTensor(drawCanvas.getRawArray()))
    console.log(prediction)

    let oneHotString = prediction.predArr
    oneHotString[prediction.digit] = `<strong class='text-primary'>${oneHotString[prediction.digit]}</strong>`

    document.getElementById('digit').innerHTML = prediction.digit
    document.getElementById('oneHot').innerHTML = oneHotString

    
}

