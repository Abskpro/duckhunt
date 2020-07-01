//1 duck should initially fly either vertically left or right
//2 duck after the duck reaches a certain height it should change the direction that is either move left or right horizontally
//3 duck should not touch the edge of screen(ie collision detection)
//4 a single duck should remain of the screen for atleast 4 sec
const duck = {
  animationUpRight: [
    {sX: 130, sY: 125},
    {sX: 166, sY: 127},
    {sX: 200, sY: 126},
    {sX: 166, sY: 127},
  ],
  animationRight: [
    {sX: 8, sY: 126},
    {sX: 49, sY: 126},
    {sX: 89, sY: 126},
    {sX: 49, sY: 126},
  ],
  animationUpLeft: [
    {sX: 409, sY: 127},
    {sX: 440, sY: 127},
    {sX: 474, sY: 127},
    {sX: 440, sY: 127},
  ],
  animationLeft: [
    {sX: 520, sY: 127},
    {sX: 560, sY: 127},
    {sX: 599, sY: 127},
    {sX: 560, sY: 127},
  ],
  animationDrop: [
    {sX: 277, sY: 129},
    {sX: 300, sY: 129},
    {sX: 327, sY: 129},
    {sX: 348, sY: 129},
    {sX: 277, sY: 129},
  ],
  animationUp: [
    {sX: 130, sY: 193},
    {sX: 170, sY: 193},
    {sX: 209, sY: 193},
    {sX: 170, sY: 193},
  ],
  animationShot: [{sX: 240, sY: 130}],
  x1: 100,
  y1: 300,
  w1: 25,
  h1: 40,
  x: 250,
  y: 325,
  w: 35,
  h: 40,

  frame: 0,
  gravity: 0.3,
  speed: 1,
  birdState: {x_coord: 'dec', y_coord: 'dec'},

  draw: function () {
    let duckFlyRight = this.animationUpRight[this.frame];
    let duckLeft = this.animationLeft[this.frame];
    let duckRight = this.animationRight[this.frame];
    let duckDrop = this.animationDrop[this.frame];
    let duckFlyLeft = this.animationUpLeft[this.frame];
    let duckFly = this.animationUp[this.frame];

    //this is for moving right either parallel or down
    if (
      (this.birdState.x_coord === 'inc' &&
        this.birdState.y_coord === 'const') ||
      (this.birdState.x_coord === 'inc' && this.birdState.y_coord === 'inc')
    ) {
      ctx.drawImage(
        sprite2,
        duckRight.sX,
        duckRight.sY,
        this.w,
        this.h,
        this.x,
        this.y,
        this.w,
        this.h,
      );
    }
    //this.is for moving left either paralled
    else if (
      this.birdState.x_coord === 'dec' &&
      this.birdState.y_coord === 'const'
    ) {
      ctx.drawImage(
        sprite3,
        duckLeft.sX,
        duckLeft.sY,
        this.w,
        this.h,
        this.x,
        this.y,
        this.w,
        this.h,
      );
    }
    // this is for upleft
    else if (
      this.birdState.x_coord === 'dec' &&
      this.birdState.y_coord === 'dec'
    ) {
      ctx.drawImage(
        sprite3,
        duckFlyLeft.sX,
        duckFlyLeft.sY,
        this.w,
        this.h,
        this.x,
        this.y,
        this.w,
        this.h,
      );
    }
    //this if for up right
    else if (
      this.birdState.x_coord === 'inc' &&
      this.birdState.y_coord === 'dec'
    ) {
      ctx.drawImage(
        sprite2,
        duckFlyRight.sX,
        duckFlyRight.sY,
        this.w,
        this.h,
        this.x,
        this.y,
        this.w,
        this.h,
      );
    }
    // this is for up only
    else if (
      (this.birdState.x_coord === 'const' &&
        this.birdState.y_coord === 'dec') ||
      (this.birdState.x_coord === 'const' && this.birdState.y_coord === 'inc')
    ) {
      ctx.drawImage(
        sprite4,
        duckFly.sX,
        duckFly.sY,
        this.w,
        this.h,
        this.x,
        this.y,
        this.w,
        this.h,
      );
    } else {
      console.log('fasd');
    }
  },

  check: function () {
    //this function checks whether the bird is outside of the boundary of the canvas
    //right
    if (this.x + this.w >= cvs.width) {
      birdState.x_coord = 'dec';
    }
    //left
    if (this.x + this.w <= cvs.width) {
      birdState.x_coord = 'inc';
    }
    //down
    if (this.y + this.h >= cvs.height) {
      birdState.y_coord = 'dec';
    }
    //up
    if (this.y + this <= cvs.width) {
      birdState.y_coord = 'inc';
    }
  },

  update: function () {
    this.period = 10;
    this.frame += frames % this.period == 0 ? 1 : 0;
    this.frame = this.frame % this.animationUpRight.length;
    this.x += this.speed;
  },
};
