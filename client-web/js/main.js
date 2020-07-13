let drawCanvas = new p5(digitDrawCanvas)

function predictDigit() {
    console.log(predictBasicModel(getTensor(drawCanvas.getRawArray())))
}