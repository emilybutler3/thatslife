let me;
let caption;

function preload() {
    
}


function setup() {
    createCanvas('fullscreen');

    me = new Sprite ();
    me.img = 'assets/me.png';
    me.scale = .07

    caption = new Sprite ();
    caption.img = 'assets/caption.png';
    caption.scale = .40
    caption.x = 425
    caption.y = 100


}

function draw() {
    clear();
}