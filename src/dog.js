const dog = {
  animation: [
    {sX: 7, sY: 19},
    {sX: 66, sY: 19},
    {sX: 122, sY: 19},
    {sX: 178, sY: 18},
    {sX: 235, sY: 17},
    {sX: 7, sY: 19},
    {sX: 66, sY: 19},
    {sX: 122, sY: 19},
    {sX: 178, sY: 18},
    {sX: 235, sY: 17},
    {sX: 7, sY: 19},
    {sX: 66, sY: 19},
    {sX: 216, sY: 72},
    {sX: 276, sY: 68},
    {sX: 327, sY: 67},
  ],
  x: 20,
  y: 355,
  w: 57,
  h: 45,

  frame: 0,
  speed: 0.95,
  jump: 5,
  gravity: 0.7,

  draw: function () {
    let dog = this.animation[this.frame];

    ctx.drawImage(
      sprite2,
      dog.sX,
      dog.sY,
      this.w,
      this.h,
      this.x,
      this.y,
      this.w,
      this.h,
    );
  },

  update: function () {
    // if the dog is not in the center of the canvas
    //if the game state is get ready state, the dog must walk to the center of the screen
    this.period = 20;
    this.frame += frames % this.period == 0 ? 1 : 0;
    //frame goex t 0 to 8 then to again 0
    // this.frame = this.frame % this.animation.length;
    // if the frame is about to jump state decrease y
    if (this.frame % this.animation.length == 13) {
      // this.y = 340;
      this.y -= this.gravity;
    }
    // if the frame is jump state increase y
    if (this.frame % this.animation.length == 14) {
      this.y += this.gravity;
      state.current = state.game;
    }
    this.x += this.speed;
  },
};
