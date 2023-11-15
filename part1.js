let continueButton, bedButton, giveupButton;
let title;
let morning;
let sparkle;
let sparkle2;
let start;

function setup() {
    createCanvas('fullscreen');

    title = new Sprite ();
    title.img = 'assets/title.png'
    
    morning = new Sprite ();
    morning.img = 'assets/morning.png'

    sparkle = new Sprite ();
    sparkle.img = 'assets/sparkle.png'

    sparkle2 = new Sprite ();
    sparkle2.img = 'assets/sparkle2.png'

    start = new Sprite ();
    start.img = 'assets/start.png'
    

    continueButton = new Sprite(425,height/2-375, 100,50);
    continueButton.color = "#B3DFA1";
    continueButton.text = "get up";

    bedButton = new Sprite(325,height/2+275, 100,50);
    bedButton.color = "#F9E894 ";
    bedButton.text = "go back to bed";

    giveupButton = new Sprite(475,height/2+275, 100,50);
    giveupButton.color = "#FF7780";
    giveupButton.text = "give up";

    


}

function draw() {
    clear();

    title.scale = 1.30;
    title.x = 550;
    title.y = 250;

    morning.scale = .40

    sparkle.scale = .07
    sparkle.x = 50;
    sparkle.y = 220;

    sparkle.rotation = 45;

    sparkle2.scale = .10
    sparkle2.x = 790
    sparkle2.y = 190

    start.scale = .20
    start.x = 400
    start.y = 600

    if (continueButton.mouse.pressed())
        location.replace("continue.html")
    
    if (bedButton.mouse.pressed())
        location.replace("gameover.html")

    if (giveupButton.mouse.pressed())
        location.replace("gameover.html")
}
