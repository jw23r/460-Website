class ScenePlay{
	constructor(){
		this.player = new Player();
		this.bgs = [
		new BG(0.0, 100, "imgs/stars.png"),
			new BG(0.0, 125, "imgs/planets.png")
		];
		this.astroids = [];
		this.enemy1 = [];
		this.delayAstroidSpawn = 0;
		this.delayAstroidSpawn2 = 0;
		this.delayEnemySpawn = 0;
		this.delayEnemySpawn2 = 0;
		this.delayEnemySpawn3 = 0;
		this.time = 0;
	}
	update(){
         this.time += game.time.dt;
		this.delayAstroidSpawn -= game.time.dt;
		this.delayAstroidSpawn2 -= game.time.dt;
		this.delayEnemySpawn -= game.time.dt;
		this.delayEnemySpawn2 -= game.time.dt;
		this.delayEnemySpawn3 -= game.time.dt;

		if(this.delayAstroidSpawn <= 0){
			this.astroids.push(new Astroid());
			this.delayAstroidSpawn = Math.random() * 2 + 1;
		}
	if(this.delayEnemySpawn <= 0){
			this.enemy1.push(new Enemy1());
			this.delayEnemySpawn = Math.random() * 2 + 1;
		}

		this.player.update();
		this.bgs.forEach(bg=>bg.update());
		
		for(let i = this.astroids.length - 1; i >= 0; i--){
			this.astroids[i].update();

			//if(this.crates[i]).aabb.overlaps(this.)
			if(this.astroids[i].dead){
				this.astroids.splice(i,1)
			}
		}
	
		for(let i = this.enemy1.length - 1; i >= 0; i--){
			this.enemy1[i].update();

			//if(this.crates[i]).aabb.overlaps(this.)
			if(this.enemy1[i].dead){
				this.enemy1.splice(i,1)
			}
		}
	}
	draw(){
		this.bgs.forEach(bg=>bg.draw());
		this.player.draw();
		this.astroids.forEach(a=>a.draw());
		this.enemy1.forEach(e=>e.draw());
	}

}