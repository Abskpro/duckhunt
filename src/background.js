const bg = {
  sX: 384,
  sY: 26,
  w: 255,
  h: 170,
  x: 0,
  y: cvs.height - 270,

  draw: function () {
    ctx.drawImage(
      sprite1,
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
      sprite1,
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
      sprite1,
      this.sX,
      this.sY,
      this.w,
      this.h,
      this.x + this.w + this.w,
      this.y,
      this.w,
      this.h,
    );

    ctx.drawImage(
      sprite1,
      this.sX,
      this.sY,
      this.w,
      this.h,
      this.x + this.w + this.w + this.w,
      this.y,
      this.w,
      this.h,
    );
  },
};
