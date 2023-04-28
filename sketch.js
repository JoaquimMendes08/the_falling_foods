var gameOverImg;
var victoryImg; 

var burgerImg;
var playerImg; 
var friesImg;
var lettuceImg;
var tomatoImg;

var fastfoodS = 0
var healthfoodS = 0

var backgroundImg

function preload(){

    gameOverImg = loadImage('gameOver.png');
    victoryImg = loadImage('victory.png');

    burgerImg = loadImage('burger.png');
    friesImg = loadImage('fries.png');
    playerImg = loadImage('open-mouth-face.png');
    lettuceImg = loadImage('lettuce.png');
    tomatoImg = loadImage('tomato.png');

    backgroundImg = loadImage('background.jpg');

}

function setup() {
    createCanvas(windowWidth, windowHeight);

    gameOver = createSprite(width / 2, height - 300); 
    gameOver.scale = 1;
    gameOver.addImage(gameOverImg);
    gameOver.visible = false;

    victory = createSprite(width / 2, height - 300); 
    victory.scale = 2;
    victory.addImage(victoryImg);
    victory.visible = false;

    player = createSprite(width / 11, height - 90);
    player.addImage(playerImg);
    player.scale = 0.5;
    //player.debug = true

    burgerG = new Group();
    friesG = new Group();
    lettuceG = new Group();
    tomatoG = new Group();

}

function draw() {
    background(backgroundImg);

    if(keyIsDown(LEFT_ARROW)){
        player.position.x -= 50;
    }

    if(keyIsDown(RIGHT_ARROW)){
        player.position.x += 50
    }

    if(player.isTouching(burgerG)){
        burgerG.destroyEach();
        fastfoodS += 1
    }

    if(player.isTouching(friesG)){
        friesG.destroyEach();
        fastfoodS += 1
    }

    if(player.isTouching(lettuceG)){
        lettuceG.destroyEach();
        healthfoodS += 1
    }

    if(player.isTouching(tomatoG)){
        tomatoG.destroyEach();
        healthfoodS += 1
    }

    if(healthfoodS >= 5){
        gameOver.visible = true;
        burgerG.destroyEach();
        burgerG.setVelocityEach(0);
        friesG.destroyEach();
        friesG.setVelocityEach(0);
        lettuceG.destroyEach();
        lettuceG.setVelocityEach(0);
        tomatoG.destroyEach();
        tomatoG.setVelocityEach(0);
    }

    player.setCollider('rectangle', 0, 0, 150, 150);
    burgerG.setColliderEach('rectangle', 0, 0, 100, 100);
    friesG.setColliderEach('rectangle', 0, 0, 100, 100);
    lettuceG.setColliderEach('rectangle', 0, 0, 100, 100);
    tomatoG.setColliderEach('rectangle', 0, 0, 100, 100);

    burgerSpawn();
    friesSpawn();
    lettuceSpawn();
    tomatoSpawn();

    drawSprites();

    textSize(45);
    fill('black');
    text('fat/nice food collected: ' + fastfoodS, 20, 50);

    textSize(45);
    fill('black');
    text('health/bad food colleted: ' + healthfoodS, 900, 50);
}

function burgerSpawn(){
    if(World.frameCount % 80 == 0){
        burger = createSprite(Math.round(random(50, width-50), 40, 10, 10))
        burger.addImage(burgerImg);
        burger.scale = 0.5;
        burger.velocity.y = 10;
        burger.lifetime = 400;
        burgerG.add(burger);
        //burgerG.debug = true
    }
}

function friesSpawn(){
    if(World.frameCount % 75 == 0){
        fries = createSprite(Math.round(random(50, width-50), 40, 10, 10));
        fries.addImage(friesImg);
        fries.scale = 0.7;
        fries.velocity.y = 10;
        fries.lifetime = 400;
        friesG.add(fries);
        //friesG.debug = true
    }
}

function lettuceSpawn(){
    if(World.frameCount % 65 == 0){
        lettuce = createSprite(Math.round(random(50, width-50), 40, 10, 10));
        lettuce.addImage(lettuceImg);
        lettuce.scale = 0.5;
        lettuce.velocity.y = 10;
        lettuce.lifetime = 400;
        lettuceG.add(lettuce);
        //lettuceG.debug = true
    }
}

function tomatoSpawn(){
    if(World.frameCount % 70 == 0){
        tomato = createSprite(Math.round(random(50, width-50), 40, 10, 10));
        tomato.addImage(tomatoImg);
        tomato.scale = 0.5;
        tomato.velocity.y = 10;
        tomato.lifetime = 400;
        tomatoG.add(tomato);
        //tomatoG.debug = true
    }
}