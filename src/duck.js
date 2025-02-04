const duck = {
    animationUpRight: [
        { sX: 130, sY: 125 },
        { sX: 166, sY: 127 },
        { sX: 200, sY: 126 },
        { sX: 166, sY: 127 }
    ],
    animationRight: [
        { sX: 8, sY: 126 },
        { sX: 49, sY: 126 },
        { sX: 89, sY: 126 },
        { sX: 49, sY: 126 }
    ],
    animationUpLeft: [
        { sX: 409, sY: 127 },
        { sX: 440, sY: 127 },
        { sX: 474, sY: 127 },
        { sX: 440, sY: 127 }
    ],
    animationLeft: [
        { sX: 520, sY: 127 },
        { sX: 560, sY: 127 },
        { sX: 599, sY: 127 },
        { sX: 560, sY: 127 }
    ],
    animationDrop: [
        { sX: 277, sY: 129 },
        { sX: 300, sY: 129 },
        { sX: 327, sY: 129 },
        { sX: 348, sY: 129 },
        { sX: 277, sY: 129 }
    ],
    animationUp: [
        { sX: 130, sY: 193 },
        { sX: 170, sY: 193 },
        { sX: 209, sY: 193 },
        { sX: 170, sY: 193 }
    ],
    animationShot: [
        { sX: 240, sY: 130 },
        { sX: 240, sY: 130 },
        { sX: 240, sY: 130 },
        { sX: 240, sY: 130 },
        { sX: 240, sY: 130 },
        { sX: 240, sY: 130 },
    ],
    // x1: 100,
    // y1: 300,
    w1: 25,
    h1: 40,
    x: 400,
    y: 340,
    w: 35,
    h: 40,

    frame: 0,
    gravity: 0.3,
    speedX: 2,
    speedY: 2,
    direction: "",
    control:false,
    pause:false,
    fall:false,

    draw: function () {
        let duckFlyRight = this.animationUpRight[this.frame];
        let duckLeft = this.animationLeft[this.frame];
        let duckRight = this.animationRight[this.frame];
        let duckDrop = this.animationDrop[this.frame];
        let duckFlyLeft = this.animationUpLeft[this.frame];
        let duckFly = this.animationUp[this.frame];
        let duckShot = this.animationShot[this.frame];

        if (this.direction === "upright" || this.direction === "downright") {
            ctx.drawImage(
                sprite2,
                duckFlyRight.sX,
                duckFlyRight.sY,
                this.w,
                this.h,
                this.x,
                this.y,
                this.w,
                this.h
            );
        }

        if (this.direction === "upleft" || this.direction === "downleft"){
            ctx.drawImage(
                sprite3,
                duckFlyLeft.sX,
                duckFlyLeft.sY,
                this.w,
                this.h,
                this.x,
                this.y,
                this.w,
                this.h
            )
        }

        if(this.direction === "up" || this.direction === "down"){
            ctx.drawImage(
                sprite4,
                duckFly.sX,
                duckFly.sY,
                this.w,
                this.h,
                this.x,
                this.y,
                this.w,
                this.h
            )
        }

        if(this.direction === "left"){
            ctx.drawImage(
                sprite2,
                duckLeft.sX,
                duckLeft.sY,
                this.w,
                this.h,
                this.x,
                this.y,
                this.w,
                this.h
            )
        }

        if(this.direction === "right"){
            ctx.drawImage(
                sprite2,
                right.sX,
                right.sY,
                this.w,
                this.h,
                this.x,
                this.y,
                this.w,
                this.h
            )
        }

        if(this.direction === "pause"){
            ctx.drawImage(
                sprite2,
                duckShot.sX,
                duckShot.sY,
                this.w,
                this.h,
                this.x,
                this.y,
                this.w,
                this.h
            )
        }

        if(this.direction === "drop"){
            ctx.drawImage(
                sprite2,
                duckDrop.sX,
                duckDrop.sY,
                this.w1,
                this.h1,
                this.x,
                this.y,
                this.w1,
                this.h1
            )
        }
        
    },

    checker:function(deltaX,deltaY){
        x2 = this.x + this.w;
        y2 = this.y + this.h;
        if(deltaX >= this.x && deltaX <= x2 && deltaY >= this.y && deltaY <= y2){
            console.log("gotcha");
            this.control = true
        }else{
            console.log("missed");
            this.control = false;
        }
    },

    bounceX: function () {
        if (this.x + this.w >= cvs.width || this.x <= 0) {
            this.speedX = -this.speedX;
        }
    },
    bounceY: function () {
        if (this.y + this.h >= cvs.height / 2 + 130 || this.y <= 0) {
            this.speedY = -this.speedY;
        }
    },

    random:function(){
        this.control = !this.control;
        console.log(this.control);
    },

    updateFly: function () {
        this.period = 10;
        this.frame += frames % this.period == 0 ? 1 : 0;
        this.frame = this.frame % this.animationUpRight.length;
        if(!this.control){
            this.bounceX();
            this.x += this.speedX;
            this.bounceY();
            this.y += this.speedY;

            if(this.speedX > 0 && this.speedY < 0){
                this.direction = "upright";
            }else if(this.speedX < 0 && this.speedX < 0){
                this.direction = "upleft";
            }else if(this.speedX < 0 && this.speedY > 0){
                this.direction = "downleft"; 
            }else if(this.speedX > 0 && this.speedY > 0){
                this.direction = "downright";
            }
        }else{
            if(this.direction != "drop"){
                this.direction = "pause"; 
            }
            setTimeout(()=>{
                if(this.y!=352){
                    this.direction = "drop"
                    this.y -= this.speedY;  
                }else{
                    state.current = state.dogDisp;
                }
            },1000)
        }
                 
    },

         
};
