let xPosition = []
let yPosition = []
let diameter = []
let density = []
let ySpeed = []
let xSpeed = []
let ballNo = 50
let gravityAcceleration = 0.4

function setup() {

    createCanvas(400, 400)
}

function draw() {

    background(220)   

    for(let i = 0; i < xPosition.length; i++){

        ySpeed[i] += gravityAcceleration
        yPosition[i] += ySpeed[i]
        xPosition[i] += xSpeed[i]
        

        if(yPosition[i] + diameter[i]/2 > height){

            ySpeed[i] = -ySpeed[i]
            ySpeed[i] = ySpeed[i] / density[i]
            yPosition[i] = height - diameter[i]/2
        }

        if(yPosition[i] - diameter[i]/2 < 0){

            ySpeed[i] = -ySpeed[i]
            ySpeed[i] = ySpeed[i] / density[i]
            yPosition[i] = 0 + diameter[i]/2
        }

        if(xPosition[i] + diameter[i]/2 > width){

            xSpeed[i] = -xSpeed[i]
            xSpeed[i] = xSpeed[i] / density[i]
            xPosition[i] = height - diameter[i]/2
        }

        if(xPosition[i] - diameter[i]/2 < 0){

            xSpeed[i] = -xSpeed[i]
            xSpeed[i] = xSpeed[i] / density[i]
            xPosition[i] = 0 + diameter[i]/2
        }

        ySpeed[i] = ySpeed[i] * 0.997
        xSpeed[i] = xSpeed[i] * 0.997

        fill(200,0,0)
        ellipse(xPosition[i], yPosition[i], diameter[i], diameter[i])
    }
}

function mousePressed(){

    for(let p = 0; p < ballNo; p ++){

        spawnCircle(mouseX, mouseY, random(-10, 10), random(-10, 10))        
    }    
}

function spawnCircle(x, y, yDir, xDir){

    xPosition.push(x)
    yPosition.push(y)
    xSpeed.push(xDir)
    ySpeed.push(yDir)
    density.push(1.25 + random(0.01,0.1))
    diameter.push(15 + random(-5,5))
}