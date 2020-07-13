let drawCanvas = new p5(digitDrawCanvas, 'drawCanvasContainer')

function predictDigit() {
    prediction = predictBasicModel(getTensor(drawCanvas.getRawArray()))
    console.table(prediction)
    document.querySelector('.rightPanel').innerHTML = prediction.digit
}