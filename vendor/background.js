const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
})

function rnd(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
};

let numDrops = 20;
let speedConst = 0.5;
let drops = [];

for (let i = 0; i < numDrops; i++) {
	let drop = resetDrop({})
	drop.y = rnd(canvas.height*-1, -10)
	drops.push(drop)
}

function resetDrop(drop) {
	drop.x = rnd(0, canvas.width);
	drop.y = 0;
	drop.size = rnd(0, 2);
	drop.velX = rnd(-0.5, 0.5);
	drop.velY = speedConst + drop.size;
	return drop
}

function render() {
	ctx.fillStyle = 'rgb(0,0,0)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'rgb(246,249,252)';

	for (drop of drops) {
		ctx.fillRect(drop.x, drop.y, drop.size, drop.size);
		if (drop.y >= canvas.height || drop.x < 0 || drop.x > canvas.width) {
			resetDrop(drop)
		}
		drop.x += drop.velX
		drop.y +=  drop.velY;
	}
	
	document.body.style.background
	window.requestAnimationFrame(render)
}

window.requestAnimationFrame(render)