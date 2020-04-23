class Astroid{
	constructor(){
		this.x = game.view.canvas.width + 48;
		this.y = 356;
		this.ax = Math.random() * -800 -1 ;
		this.ay = -510;
		this.aabb = new AABB(96,96);
		this.img = new Image();
		this.img.src = "imgs/Enemy.png";
	this.vx = -250;
	this.time =0;

	}
	update(){
this.y -= this.vx * game.time.dt;
this.time += game.time.dt;
if(this.time > 10 ) this.dead =true;
//this.aabb.center.x = this.x;
//this.aabb.

	}
draw(){
	//if(this.time <=20){
		game.view.gfx.drawImage(this.img, this.x + this.ax, this.y + this.ay );

}

}