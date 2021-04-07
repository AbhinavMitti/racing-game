canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

car1_width = 100;
car1_height = 90;
car2_width = 100;
car2_height = 90;

background_image = "racingtrack.png";
car1_image = "car1.png";
car2_image = "car2.png";

car1_Y =70;
car1_X = 70;
car2_Y = 20;
car2_X = 20;


function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

    car1_imgtag = new Image();
    car1_imgtag.onload = uploadcar1;
    car1_imgtag.src = car1_image;

    car2_imgtag = new Image();
    car2_imgtag.onload = uploadcar2;
    car2_imgtag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgtag, car1_X, car1_Y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgtag, car2_X, car2_Y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38')
     {
        up();
        console.log("up");
    }
    if (keypressed == '40') 
    {
        down();
        console.log("down");
    }
    if (keypressed == '37') 
    {
        left();
        console.log("left");
    }
    if (keypressed == '39') 
    {
        right();
        console.log("right");
    }
}