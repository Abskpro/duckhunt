const cvs = document.getElementById('myCanvas');
const ctx = cvs.getContext('2d');

//game vars and const
let frames = 0;

//load sprite image
const sprite = new Image();
sprite.src = '../assets/sprite.png';

const bg = {
  sX: 384,
  sY: 26,
  w: 255,
  h: 170,
  x: 0,
  y: cvs.height - 270,

  draw: function () {
    ctx.drawImage(
      sprite,
      this.sX,
      this.sY,
      this.w,
      this.h,
      this.x,
      this.y,
      this.w,
      this.h,
    );

    ctx.drawImage(
      sprite,
      this.sX,
      this.sY,
      this.w,
      this.h,
      this.x + this.w,
      this.y,
      this.w,
      this.h,
    );

    ctx.drawImage(
      sprite,
      this.sX,
      this.sY,
      this.w,
      this.h,
      this.x + this.w + this.w,
      this.y,
      this.w,
      this.h,
    );
  },
};

function draw() {
  ctx.fillStyle = '#5eccec';
  ctx.fillRect(0, 0, cvs.width, 230);
  ctx.closePath();
  ctx.fillStyle = '#7c4431';
  ctx.fillRect(0, 400, cvs.width, 100);
  bg.draw();
}

function loop() {
  draw();
  frames++;
  requestAnimationFrame(loop);
}

loop();
