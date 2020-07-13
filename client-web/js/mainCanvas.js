var digitDrawCanvas = function(p) {
    p.livePredit = false

    p.setup = function() {
        p.pixelDensity(20);
        p.createCanvas(28,28)
        p.background(0)
    }

    p.draw = function() {

    }
    
    p.mouseDragged = function() {
        let c = p.color(255, 255, 255)
        p.fill(c)
        p.noStroke()
        p.ellipse(p.mouseX/10,p.mouseY/10,2,2)

        if (p.livePredit) {
            predictDigit()
        }
    }

    p.keyPressed = function() {
        if(p.key === 'c') {
            p.background(0)
        }
    }

    p.getRawArray = function() {
        let canvasArray = []
        for(i=0;i<28;i++) {
            canvasArray.push([])
        }

        for(y=0;y<28;y++) {
            for(x=0;x<28;x++) {
                canvasArray[y].push(p.get(x, y)[0])
            }
        }

        return canvasArray
    }



}