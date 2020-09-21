const cvs = document.getElementById('myCanvas');
const ctx = cvs.getContext('2d');
    elemLeft = cvs.offsetLeft;
    elemTop = cvs.offsetTop;
    context = cvs.getContext('2d');
    elements = [];

//game vars and const
let frames = 0;

//load sprite image
const sprite1 = new Image();
sprite1.src = '../assets/sprite.png';

const sprite2 = new Image();
sprite2.src = '../assets/sprite-removebg-preview.png';

const sprite3 = new Image();
sprite3.src = '../assets/sprite-reverse.png';

const sprite4 = new Image();
sprite4.src = '../assets/spriteImage2.png';

let random = Math.floor(Math.random() * 2) + 1;

const state = {
  current: 0,
  getReady: 0,
  game: 1,
  dogDisp:2,
};

cvs.addEventListener('click', function () {
    var x = event.pageX - elemLeft;
        y = event.pageY - elemTop;
    if(state.current === 1){
        duck.checker(x,y);   
    }


  switch (state.current) {
    case state.getReady:
      state.current = state.game;
      break;
  }
});
