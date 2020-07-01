function draw() {
  ctx.fillStyle = '#5eccec';
  ctx.fillRect(0, 0, cvs.width, 230);
  ctx.closePath();
  ctx.fillStyle = '#7c4431';
  ctx.fillRect(0, 400, cvs.width, 100);
  bg.draw();
  if (state.current == state.getReady) {
    dog.draw();
  } else if (state.current == state.game) {
    duck.draw();
  }
}

function update() {
  if (state.current == state.getReady) {
    dog.update();
  } else if (state.current == state.game) {
    duck.update();
  }
}

function loop() {
  update();
  draw();
  frames++;
  requestAnimationFrame(loop);
}

loop();
