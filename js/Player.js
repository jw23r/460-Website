class Player{
	constructor(){
		this.isGrounded = false;


		this.x = 400;
		this.y = 400;
		//velocity
		this.vx = 0;
		this.vy = 0;

		this.ax = -48;
		this.ay = -48;
		this.aabb = new AABB(50,75);
		this.imgs = [];
		this.animFrame = 0;
		this.animDelay = 0;
		for(let i = 0; i < 12; i++){
			const img = new Image();
			img.src = "imgs/Ship-"+(i+1)+".png";
			this.imgs.push(img);
		}


	}
	update(){
		//sdadasd
		this.MoveHorizontal();
        this. MoveVertical();


		this.animDelay -= game.time.dt;
		if(this.animDelay <= 0){
			this.animFrame ++;
			if(this.animFrame >= this.imgs.length) this.animFrame = 0;
			this.animDelay = 1/15;
		}

		if(keyboard.onDown(mapping.jump())){
			this.vy = -600;
		}
		this.isGrounded = false;
		//apply gravity
		//this.vy +=1200 * game.time.dt;

		//euler phyics
		this.x += this.vx * game.time.dt;
		this.y += this.vy * game.time.dt;

		//clamp to ground
		const bottom = 475;
		if(this.y > bottom){
			this.y = bottom;
			this.vy = 0;
			
		}	
	
	}
	
	
	MoveHorizontal(){
		let inputX = 0;
		const moveAccel = 1200;
		const maxVel = 400;
		if(keyboard.isDown(mapping.right())) inputX++;
		if(keyboard.isDown(mapping.left())) inputX--;		
	
		if(inputX != 0){ 
			this.vx += moveAccel * game.time.dt * inputX;
			if(this.vx > maxVel) this.vx = maxVel;
			if(this.vx < -maxVel) this.vx = -maxVel;
		}else{
			if (this.vx < 0){
				this.vx += moveAccel * game.time.dt;
				if(this.vx > 0) this.vx = 0;
			}
			if (this.vx > 0){

				this.vx += -moveAccel * game.time.dt;
				if(this.vx < 0) this.vx = 0;
			}
		}
	}
	MoveVertical(){
		let inputY = 0;
		const moveAccel = 1200;
		const maxVel = 400;
		if(keyboard.isDown(mapping.down())) inputY++;
		if(keyboard.isDown(mapping.up())) inputY--;		
	
		if(inputY != 0){ 
			this.vy += moveAccel * game.time.dt * inputY;
			if(this.vy > maxVel) this.vy = maxVel;
			if(this.vy < -maxVel) this.vy = -maxVel;
		}else{
			if (this.vy < 0){
				this.vy += moveAccel * game.time.dt;
				if(this.vy > 0) this.vy = 0;
			}
			if (this.vy > 0){

				this.vy += -moveAccel * game.time.dt;
				if(this.vy < 0) this.vy = 0;
			}
		}
	}
	draw(){
		//this.aabb.draw();
		const gfx = game.view.gfx;
		gfx.drawImage(this.imgs[this.animFrame],this.x + this.ax,this.y + this.ay);
	}

}

