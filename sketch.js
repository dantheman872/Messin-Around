let xPosition = []
let yPosition = []
let diameter = []
let density = []
let ySpeed = []
let gravityAcceleration = 0.4



function setup() {

    createCanvas(400, 400)
}

function draw() {

    background(220)   

    for(let i = 0; i < ySpeed.length; i++){

        ySpeed[i] += gravityAcceleration
        yPosition[i] += ySpeed[i]

        if(yPosition[i] + diameter[i]/2 > height){

            ySpeed[i] = -ySpeed[i]
            ySpeed[i] = ySpeed[i] / density[i]
            yPosition[i] = height - diameter[i]/2
        }

        ySpeed[i] = ySpeed[i] * 0.997

        fill(200,0,0)
        ellipse(xPosition[i], yPosition[i], diameter[i], diameter[i])
    }
}

function mousePressed(){

    xPosition.push(mouseX)
    yPosition.push(mouseY)
    ySpeed.push(0)
    density.push(1.25 + random(0.01,0.1))
    diameter.push(20 + random(-5,5))
}
