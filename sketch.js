var car, car1, car2, car3, wall, wall1, wall2, wall3;
var speed;
var line, line1, line2, line3;
var weight, weight1, weight2, weight3;

function setup() {
    createCanvas(1536, 710);
    speed = random(55, 90);
    weight = random(500, 1500);
    weight1 = random(500, 1500);
    weight2 = random(500, 1500);
    weight3 = random(500, 1500);
    car = createSprite(50, 80, 50, 50);
    car.shapeColor = "magenta";
    car1 = createSprite(50, 250, 50, 50);
    car1.shapeColor = "magenta";
    car2 = createSprite(50, 430, 50, 50);
    car2.shapeColor = "magenta";
    car3 = createSprite(50, 600, 50, 50);
    car3.shapeColor = "magenta";
    wall = createSprite(1450, 80, 40, 120);
    wall.shapeColor = "red";
    wall1 = createSprite(1450, 250, 40, 120);
    wall1.shapeColor = "yellow";
    wall2 = createSprite(1450, 430, 40, 120);
    wall2.shapeColor = "blue";
    wall3 = createSprite(1450, 600, 40, 120);
    wall3.shapeColor = "green";
    line = createSprite(width / 2, 165, width, 10);
    line.shapeColor = "white";
    line1 = createSprite(width / 2, 345, width, 10);
    line1.shapeColor = "white";
    line2 = createSprite(width / 2, 520, width, 10);
    line2.shapeColor = "white";
    car.velocityX = speed;
    car1.velocityX = speed;
    car2.velocityX = speed;
    car3.velocityX = speed;
}

function draw() {
    background(0, 0, 0);

    drawSprites();
    if (wall.x - car.x < (car.width + wall.width) / 2) {
        car.velocityX = 0;
        var deformaton = 0.5 * weight * speed * speed / 22509;
        if (deformaton < 180) {
            car.shapeColor = "red";
        }
        if (deformaton < 100 && deformation > 180) {
            car.shapeColor = "yellow";
        }
        if (deformaton > 100) {
            car.shapeColor = "blue";
        }
    }
    if (wall1.x - car1.x < (car1.width + wall1.width) / 2) {
        car1.velocityX = 0;
        var deformaton1 = 0.5 * weight1 * speed * speed / 22509;
        if (deformaton1 < 180) {
            car1.shapeColor = "yellow";
        }
        if (deformaton1 < 100 && deformation > 180) {
            car1.shapeColor = "blue";
        }
        if (deformaton1 > 100) {
            car1.shapeColor = "green";
        }
    }
    if (wall2.x - car2.x < (car2.width + wall2.width) / 2) {
        car2.velocityX = 0;
        var deformaton2 = 0.5 * weight2 * speed * speed / 22509;
        if (deformaton2 < 180) {
            car2.shapeColor = "red";
        }
        if (deformaton2 < 100 && deformation > 180) {
            car2.shapeColor = "green";
        }
        if (deformaton2 > 100) {
            car2.shapeColor = "blue";
        }
    }
    if (wall3.x - car3.x < (car3.width + wall3.width) / 2) {
        car3.velocityX = 0;
        var deformaton3 = 0.5 * weight3 * speed * speed / 22509;
        if (deformaton3 < 180) {
            car3.shapeColor = "red";
        }
        if (deformaton3 < 100 && deformation > 180) {
            car3.shapeColor = "green";
        }
        if (deformaton3 > 100) {
            car3.shapeColor = "yellow";
        }
    }
}