class BG{
	constructor(y,vy,url){
	this.x = 0;
	this.y = y;
	this.vx = vy;
	this.img = new Image();
	this.img.src = url;
	}
	update(){
		this.y += this.vx * game.time.dt;
	if(this.y > this.img.height) this.y -= this.img.height;
	}
	draw(){
		game.view.gfx.drawImage(this.img,this.x,this.y);
		game.view.gfx.drawImage(this.img,this.x ,this.y - this.img.height);

	}
}