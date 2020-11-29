var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var tamount = 120;

const BG_COLOR = '#000000';
const POINT_COLOR = '#FFFFFF';
const SNK_COLOR = '#FF0000';
const SNK2_COLOR = '#00FF00';
const SNK3_COLOR = '#0000FF';
const SNK4_COLOR = '#FFFF00';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const ctx1 = canvas.getContext("2d");
const ctx2 = canvas.getContext("2d");
const ctx3 = canvas.getContext("2d");
const ctx4 = canvas.getContext("2d");
const timer = canvas.getContext("2d");

canvas.width = 1300;
canvas.height = 600;

const FR = 30;
const S = 20;
const TX = canvas.width / S;
const TY = canvas.height / S;

let pos, vel, snake, pos2, vel2, snake2, pos3, vel3, snake3, pos4, vel4, snake4, point;

function init(){
	pos = {x: 10, y: 5};
	vel = {x: 0, y: 0};

	snake = [
		{x: 10, y:5}
	]
}

init();

function init2(){
	pos2 = {x: 10, y: 25};
	vel2 = {x: 0, y: 0};

	snake2 = [
		{x: 10, y:25}
	]
}

init2();

function init3(){
	pos3 = {x: 46, y: 5};
	vel3 = {x: 0, y: 0};

	snake3 = [
		{x: 46, y:5},
	]
}

init3();

function init4(){
	pos4 = {x: 46, y: 25};
	vel4 = {x: 0, y: 0};

	snake4 = [
		{x: 46, y:25},
	]
}

init4();

function randomPoint(){
	point = {
		x: Math.floor(Math.random() * TX),
		y: Math.floor(Math.random() * TY),
	}
}
	randomPoint();

function winCheck(){
	
	if(tamount <= 0)
	{
		if(counter1 > counter2){
		timer.fillStyle = SNK_COLOR;
		tamount = "Red Won!";
		}
		if(counter1 > counter3){
		timer.fillStyle = SNK_COLOR;
		tamount = "Red Won!";
		}
		if(counter1 > counter4){
		timer.fillStyle = SNK_COLOR;
		tamount = "Red Won!";
		}
		if(counter2 > counter1){
		timer.fillStyle = SNK2_COLOR;
		tamount = "Green Won!";
		}
		if(counter2 > counter3){
		timer.fillStyle = SNK2_COLOR;
		tamount = "Green Won!";
		}
		if(counter2 > counter4){
		timer.fillStyle = SNK2_COLOR;
		tamount = "Green Won!";
		}
		if(counter3 > counter1){
		timer.fillStyle = SNK3_COLOR;
		tamount = "Blue Won!";
		}
		if(counter3 > counter2){
		timer.fillStyle = SNK3_COLOR;
		tamount = "Blue Won!";
		}
		if(counter3 > counter4){
		timer.fillStyle = SNK3_COLOR;
		tamount = "Blue Won!";
		}
		if(counter4 > counter1){
		timer.fillStyle = SNK4_COLOR;
		tamount = "Yellow Won!";
		}
		if(counter4 > counter2){
		timer.fillStyle = SNK4_COLOR;
		tamount = "Yellow Won!";
		}
		if(counter4 > counter3){
		timer.fillStyle = SNK4_COLOR;
		tamount = "Yellow Won!";
		}
		init();
		init2();
		init3();
		init4();
	}
}

setInterval(() => {
	requestAnimationFrame(timerCount);
}, 1000/1);

function timerCount(){
	tamount -= 1;
	winCheck();
}

document.addEventListener('keydown', keydown);

function keydown(e){
		switch(e.keyCode){
		case 37:{
			return vel = {x: -1, y: 0};
		}
		case 38:{
			return vel = {x: 0, y: -1}
		}
		case 39:{
			return vel = {x: 1, y: 0}
		}
		case 40:{
			return vel = {x: 0, y: 1}
		}
		case 65:{
			return vel2 = {x: -1, y: 0}
		}
		case 87:{
			return vel2 = {x: 0, y: -1}
		}
		case 68:{
			return vel2 = {x: 1, y: 0}
		}
		case 83:{
			return vel2 = {x: 0, y: 1}
		}
		case 74:{
			return vel3 = {x: -1, y: 0}
		}
		case 73:{
			return vel3 = {x: 0, y: -1}
		}
		case 76:{
			return vel3 = {x: 1, y: 0}
		}
		case 75:{
			return vel3 = {x: 0, y: 1}
		}
		case 70:{
			return vel4 = {x: -1, y: 0}
		}
		case 84:{
			return vel4 = {x: 0, y: -1}
		}
		case 72:{
			return vel4 = {x: 1, y: 0}
		}
		case 71:{
			return vel4 = {x: 0, y: 1}
		}
	}
}
setInterval(() => {
	requestAnimationFrame(gameLoop);
}, 1000 /FR);

function gameLoop(){
	ctx.fillStyle = BG_COLOR;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = POINT_COLOR;
	ctx.fillRect(point.x*S,point.y*S,S,S);
	ctx1.font = "30px Comic Sans MS";
	ctx1.fillStyle = SNK_COLOR;
	ctx1.fillText(counter1, 30, 50);
	ctx2.font = "30px Comic Sans MS";
	ctx2.fillStyle = SNK2_COLOR;
	ctx2.fillText(counter2, 30, 575);
	ctx3.font = "30px Comic Sans MS";
	ctx3.fillStyle = SNK3_COLOR;
	ctx3.fillText(counter3, 1125, 50);
	ctx4.font = "30px Comic Sans MS";
	ctx4.fillStyle = SNK4_COLOR;
	ctx4.fillText(counter4, 1125, 575);
	timer.font = "30p Comic Sans MS"
	timer.fillStyle = POINT_COLOR;
	timer.fillText(tamount, 577.5, 312.5);
	
	ctx.fillStyle = SNK_COLOR;
	for (let cell of snake){
		ctx.fillRect(cell.x*S, cell.y*S, S,S);
	}

	ctx.fillStyle = SNK2_COLOR;
	for (let cell2 of snake2){
		ctx.fillRect(cell2.x*S, cell2.y*S, S,S);
	}
	ctx.fillStyle = SNK3_COLOR;
	for (let cell3 of snake3){
		ctx.fillRect(cell3.x*S, cell3.y*S, S,S);
	}

	ctx.fillStyle = SNK4_COLOR;
	for (let cell4 of snake4){
		ctx.fillRect(cell4.x*S, cell4.y*S, S,S);
	}

	pos.x += vel.x;
	pos.y += vel.y;

	pos2.x += vel2.x;
	pos2.y += vel2.y;

	pos3.x += vel3.x;
	pos3.y += vel3.y;

	pos4.x += vel4.x;
	pos4.y += vel4.y;

	if(pos.x === point.x && pos.y === point.y){
		counter1++;
		randomPoint();
	}

	if(pos2.x === point.x && pos2.y === point.y){
		counter2++;
		randomPoint();
	}

	if(pos3.x === point.x && pos3.y === point.y){
		counter3++;
		randomPoint();
	}

	if(pos4.x === point.x && pos4.y === point.y){
		counter4++;
		randomPoint();
	}

	if (pos.x < 0) {
		pos.x = TX
	}
	if (pos.x > TX) {
		pos.x = 0
	}
	if (pos.y < 0) {
		pos.y = TY
	}
	if (pos.y > TY) {
		pos.y = 0
	}
	if (pos2.x < 0) {
		pos2.x = TX
	}
	if (pos2.x > TX) {
		pos2.x = 0
	}
	if (pos2.y < 0) {
		pos2.y = TY
	}
	if (pos2.y > TY) {
		pos2.y = 0
	}
	if (pos3.x < 0) {
		pos3.x = TX
	}
	if (pos3.x > TX) {
		pos3.x = 0
	}
	if (pos3.y < 0) {
		pos3.y = TY
	}
	if (pos3.y > TY) {
		pos3.y = 0
	}
	if (pos4.x < 0) {
		pos4.x = TX
	}
	if (pos4.x > TX) {
		pos4.x = 0
	}
	if (pos4.y < 0) {
		pos4.y = TY
	}
	if (pos4.y > TY) {
		pos4.y = 0
	}

	if(vel.x || vel.y){
		snake.push({...pos});
		snake.shift();
	}

	if(vel.x || vel.y){
		snake.push({...pos});
		snake.shift();
	}

	if(vel.x || vel.y){
		snake.push({...pos});
		snake.shift();
	}

	if(vel2.x || vel2.y){
		snake2.push({...pos2});
		snake2.shift();
	}

	if(vel2.x || vel2.y){
		snake2.push({...pos2});
		snake2.shift();
	}

	if(vel2.x || vel2.y){
		snake2.push({...pos2});
		snake2.shift();
	}

	if(vel3.x || vel3.y){
		snake3.push({...pos3});
		snake3.shift();
	}

	if(vel3.x || vel3.y){
		snake3.push({...pos3});
		snake3.shift();
	}

	if(vel3.x || vel3.y){
		snake3.push({...pos3});
		snake3.shift();
	}

	if(vel4.x || vel4.y){
		snake4.push({...pos4});
		snake4.shift();
	}

	if(vel4.x || vel4.y){
		snake4.push({...pos4});
		snake4.shift();
	}

	if(vel4.x || vel4.y){
		snake4.push({...pos4});
		snake4.shift();
	}
}