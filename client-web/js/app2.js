function setup() {
    pixelDensity(20);
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

function keyPressed() {
    if (key === 'c') {
        background(0)
    }
    if (key === 'x') {
        console.log(predict(getTensor(getRawArray())))
    }
}


function getPixels() {
    loadPixels()
    const a = pixels
    updatePixels()
    return a
}

function tfgetpixels() {
    return tf.browser.fromPixels(document.querySelector('.p5Canvas'))
}



function getRawArray() {
    let canvasArray = []
    for(i=0;i<28;i++) {
        canvasArray.push([])
    }
    for(y=0;y<28;y++) {
        for(x=0;x<28;x++) {
            canvasArray[y].push(get(x, y)[0])
            //console.log(x,y)
        }
    }

    return canvasArray
}