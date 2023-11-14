let avatar;
let tileImg


function setup() {
    new Canvas("fullscreen");
    avatar = new Sprite(width/2,height/2,128,128,'s');

}

function draw() {
    clear();

    text("lets just see how today goes...",300,30);
    textSize(20);
    

}

function keyReleased() {
    new Sprite(width/2,-15,30,30);
}