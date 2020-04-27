class Player{
    init(sprite){
        this.sprite = sprite;
        this.sprite.setCollideWorldBounds(true);
        this.sprite.setBounce(0.2);
    }

    update(scene){
        if(!scene)return;
        if(!scene.dt) return;

        if(!scene.input) return;
        const cursor = scene.input.keyboard.createCursorKeys();
        let moveInput = {
            x:0,
            y:0,
        };
        if(cursor.left.isDown) moveInput.x--;
        if(cursor.right.isDown) moveInput.x++;
        if(cursor.down.isDown) moveInput.y++;
        if(cursor.up.isDown) moveInput.y--;

        this.sprite.x +=400*scene.dt*moveInput.x;
        this.sprite.y +=400*scene.dt*moveInput.y;
 }
}
    const config = {
        type:Phaser.AUTO,
        width:800,
        height:600,
        physics:{
            default:"arcade",
            arcade:{
                gravity:{
                    y:0
                }
            }  
        },
        scene:{

            preload:function(){
            
                this.load.image('ship','imgs/twinShip.png');
                this.load.image('bullet', 'imgs/bullet.png');
                this.load.image('asteroid', 'imgs/asteroid.png');
                
                
            },
            create:function(){
               // this.add.image(400,300,'bg');
                var score = 0;
                var scoreText;
                scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#ffffff' });
                this.colldown = 1;
                this.keySpaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
                this.player =  new Player();
                this.player.init(this.physics.add.sprite(400,300,'ship'));
                this.asterioids = this.physics.add.group();
                this.bullets = this.physics.add.group();
                this.physics.add.collider(this.player.sprite, this.asterioids,(p,a)=>{
                    a.warpBackToTop();

                });
                   this.physics.add.overlap(this.bullets, this.asterioids,(b,a)=>{
                       score += 10;
                       scoreText.setText('Score: ' + score);
                       b.destroy();
                       a.warpBackToTop();

                })

                this.addAsteroid=function(){
                    const a = this.asterioids.create(0,0,"asteroid");

                    a.warpBackToTop=function(){
                                a.x = Math.random()*800;
                                a.y = Math.random()*-600 - 100;
                                a.body.velocity.x = Math.random()*100 - 50;
                                a.body.velocity.y = Math.random()*300 + 100 ;
                            };
                    a.warpBackToTop();
                            }

                            
                    
                
                this.addbullet=function(){

                                const b = this.bullets.create(this.player.sprite.x,this.player.sprite.y,'bullet');
                                b.body.velocity.x=0;
                                b.body.velocity.y=-800;
                            };
                for(let i = 0; i<10;i++) this.addAsteroid();
            },

     update:function(now,dt){
                            this.dt = dt/1000;
                            
         this.player.angle += 10;
         this.player.update(this);
                            if(this.keySpaceBar.isDown & this.colldown >= 0){
                                this.addbullet();
                        this.colldown = .1;
                            }
                         this.asterioids.children.iterate(a=>{
                             if(a.body.position.y>600){
                                 a.warpBackToTop();
                             }
                         }); 
         this.bullets.children.iterate(b=>{
             if(b&&b.y<0){
                 b.destroy();
             }
         });
     },
        }
    };
                   
            const game = new Phaser.Game(config);