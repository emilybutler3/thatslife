let continueButton, bedButton, giveupButton;
let title;
let morning;
let sparkle;

function setup() {
    createCanvas('fullscreen');

    title = new Sprite ();
    title.img = 'assets/title.png'
    
    morning = new Sprite ();
    morning.img = 'assets/morning.png'

    sparkle = new Sprite ();
    sparkle.img = 'assets/sparkle.png'
    

    continueButton = new Sprite(475,height/2+200, 100,50);
    continueButton.color = "#B3DFA1";
    continueButton.text = "get up";

    bedButton = new Sprite(325,height/2+200, 100,50);
    bedButton.color = "#F9E894 ";
    bedButton.text = "go back to bed";

    giveupButton = new Sprite(400,height/2+275, 100,50);
    giveupButton.color = "#FF7780";
    giveupButton.text = "give up";

    


}

function draw() {
    clear();
    textSize(18);
    text("start your day using the buttons below", 250,height/2+150);

    title.scale = 1.30;
    title.x = 550;
    title.y = 250;

    morning.scale = .40

    sparkle.scale = .07
    sparkle.x = 50;
    sparkle.y = 220;


    if (continueButton.mouse.pressed())
        location.replace("continue.html")
    
    if (bedButton.mouse.pressed())
        location.replace("bed.html")

    if (giveupButton.mouse.pressed())
        location.replace("gameover.html")
}
