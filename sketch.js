let xPosition = []
let yPosition = []
let diameter = []
let density = []
let ySpeed = []
let xSpeed = []
let lineXY = []
let ballXY;
let ballNo = 10
let gravityAcceleration = 0.4

function setup() {

    createCanvas(600, 600)
    for(let p = 0; p < ballNo; p ++){

        spawnCircle(random(0,width), 0, random(-10, 10), random(-10, 10))        
    }  
    for(let i = 0; i < 450; i++){

        lineXY.push(int(str(i)+ str(round((1.5 * i)+300))))        
    }  
    console.log(lineXY)
}

function draw() {
    
    
    console.log(ballXY)
    background(220)   
    fill(170)
    triangle(0, height/2, width * 3/4, height, 0, height)
    
    

    for(let i = 0; i < xPosition.length; i++){

        ballXY = int((str(xPosition[i])) + (str(yPosition[i])))
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

        if(hitLine(xPosition[i], yPosition[i], diameter[i]) === true){

       // rect(500,500,500,500)
        }

        if(lineXY.includes(ballXY)){

            rect(500,500,500,500)
        }
    }
}

function mousePressed(){

    // for(let p = 0; p < ballNo; p ++){

    //     spawnCircle(mouseX, mouseY, random(-10, 10), random(-10, 10))        
    // }    

    for(let i = 0; i < xPosition.length; i++){

        if(xPosition[i] < mouseX + 50 && xPosition[i] > mouseX - 50 && yPosition[i] < mouseY + 50 && yPosition[i] > mouseY - 50){

            xSpeed[i] = random(-10,10)
            ySpeed[i] = random(-10,10)
        }
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

function hitLine(cx, cy, cd){

    //  0, 300, 450, 600
    //y = -1.5x + 300
    if(cy < (-1.5 * cx) + 300){

        return true
    }
}