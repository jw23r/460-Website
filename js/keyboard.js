const keys = {
	

/////// const keycode values
a:65,
d:68,
s:83,
w:87,
space:32,
left:37,
up:38,
right:39,
down:40




	///////
	
}

const mapping ={
	right(){return [ keys.d, keys.right];},
	left(){return [ keys.a, keys.left];},
	up(){return [ keys.w, keys.up];},
	down(){return [ keys.s, keys.down];},
	jump(){return keys.space;},
}

const keyboard = {
	keys:[],
	prev:[],
	isDown(keycode){
		if(Array.isArray(keycode)){
			let val = false;
			keycode.forEach(k=>{
				if(this.keys[k]) val = true;
			});
			return val;
		}

		return this.keys[keyCode];
	},
	onDown(keycode){
		if(Array.isArray(keycode)){
			let val = false;
			keycode.forEach(k=>{
				if(this.onDown(k)) val = true;
			});
			return val;
		}


		return this.keys[keycode] && !this.prev[keycode];
	},
	update(){
	//copys keys into prev
	this.prev = this.keys.slice(0);
},
updateKey(e, value){

	this.keys[e.keyCode] = value;
},
setup(){
	document.addEventListener("keydown",(e)=>{
		
		this.updateKey(e,true);
	});
	document.addEventListener("keyup",(e)=>{
		this.updateKey(e,false);
	});
}
};
keyboard.setup();