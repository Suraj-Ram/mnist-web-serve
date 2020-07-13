let drawCanvas = new p5(digitDrawCanvas, 'drawCanvasContainer')

function predictDigit() {
    console.log(predictBasicModel(getTensor(drawCanvas.getRawArray())))
}