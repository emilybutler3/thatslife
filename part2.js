let girl;
let caption;
// let menuButton;
let sprite;
let avoid;

function preload() {
   
}   


function setup() {
    createCanvas('fullscreen');


    girl = new Sprite();
    girl.img = 'assets/me.png';
    girl.scale = .15
    girl.x = 425
    girl.y = 230

    caption = new Sprite ();
    caption.img = 'assets/caption.png';
    caption.scale = .40
    caption.x = 425
    caption.y = 80

    avoid = new Sprite ();
    avoid.img = 'assets/avoid.png';
    avoid.scale = .20
    avoid.x = 425
    avoid.y = 120


    // menuButton = new Sprite (425,height/2-300, 100,30);
    // menuButton.color = "#F238A8";
    // menuButton.text = "MENU";

    // row 1 squares
    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 360
    sprite.y = 300

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 280
    sprite.y = 300


    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 200
    sprite.y = 300

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 120
    sprite.y = 300

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 40
    sprite.y = 300

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 500
    sprite.y =300

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 580
    sprite.y = 300

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 660
    sprite.y = 300

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 740
    sprite.y = 300

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 820
    sprite.y = 300

    // row 2 squares
    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 360
    sprite.y = 400

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 280
    sprite.y = 400

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 200
    sprite.y = 400

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 120
    sprite.y = 400

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 40
    sprite.y = 400

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 500
    sprite.y = 400

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 580
    sprite.y = 400

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 660
    sprite.y = 400

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 740
    sprite.y = 400

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 820
    sprite.y = 400

    // row 3 squares
    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 370
    sprite.y = 500

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 280
    sprite.y = 500

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 200
    sprite.y = 500

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 120
    sprite.y = 500

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 40
    sprite.y = 500

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 490
    sprite.y = 500

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 580
    sprite.y = 500

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 660
    sprite.y = 500

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 740
    sprite.y = 500

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 820
    sprite.y = 500

    // row 4 squares
    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 370
    sprite.y = 600

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 280
    sprite.y = 600

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 200
    sprite.y = 600

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 120
    sprite.y = 600

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x =40
    sprite.y = 600

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 490
    sprite.y = 600

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 580
    sprite.y = 600

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 660
    sprite.y = 600

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 740
    sprite.y = 600

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 820
    sprite.y = 600

    // row 5 squares
    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 380
    sprite.y = 700

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 280
    sprite.y = 700

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 200
    sprite.y = 700

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 120
    sprite.y = 700

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 40
    sprite.y = 700

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 480
    sprite.y = 700

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 580
    sprite.y = 700

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 660
    sprite.y = 700

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 740
    sprite.y = 700

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 820
    sprite.y = 700

    // row 6 squares
    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 385
    sprite.y = 800

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 280
    sprite.y = 800

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 200
    sprite.y = 800

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 120
    sprite.y = 800

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 40
    sprite.y = 800

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 460
    sprite.y = 800

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 580
    sprite.y = 800

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 660
    sprite.y = 800

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 740
    sprite.y = 800

    sprite = new Sprite();
    sprite.width = 50;
    sprite.height = 50;
    sprite.x = 820
    sprite.y = 800

    // world.gravity.y = 10;
    allSprites.rotationLock = true;


}

function draw() {
    clear();

    girl.x = mouse.x;
    girl.y = mouse.y;

    // girl.moveTowards(mouse);

    // if (girl.overlaps(allSprites)) allSprites.remove();

    if (girl.collides(allSprites)) allSprites.remove();

    // if (menuButton.mouse.pressed())
    // location.replace("index.html");

}