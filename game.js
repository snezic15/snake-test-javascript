import {snakeIntersection, update as updateSnake, draw as drawSnake} from './snake.js';
import {setMultiplier, getMultiplier, update as updateFood, draw as drawFood} from './food.js';

let renderTime = 0;
let counter = 0;
let snakeSpeed = 5;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function gameStart() {
	let speed = (function ask() {
  		let n = prompt('Set Snake Speed', 5);
  		return isNaN(n) || +n < 1 ? ask() : setSpeed(n);
	}());

	let multiplier = (function ask() {
  		let n = prompt('Set Snake Score Multiplier', 10);
  		return isNaN(n) || +n < 10 ? ask() : setMultiplier(n);
	}());

	document.getElementById('extra').innerHTML = "Speed: " + snakeSpeed + " &nbsp; &nbsp; &nbsp; Multiplier: " + getMultiplier();
}

function main(currentTime) {
	if (gameOver) {
		if (confirm('You lost, play again?')) {
			window.location = '/';
		}

		return;
	}
	
	window.requestAnimationFrame(main);
	const lastRenderSec = (currentTime - renderTime) / 1000

	if (lastRenderSec < (1 / snakeSpeed)) {
		return;
	}

	renderTime = currentTime;

	update();
	draw();
}

document.addEventListener("load", gameStart());
window.requestAnimationFrame(main);

function update() {
	updateSnake();
	updateFood();
	checkGame();
}

function draw() {
	gameBoard.innerHTML = '';
	drawSnake(gameBoard);
	drawFood(gameBoard);
}

function checkGame() {
	gameOver = snakeIntersection();
}

export function setCounter(val) {
	counter += val;
	document.getElementById('counter').innerHTML = "Score: " + counter;
}

function setSpeed(val) {
	snakeSpeed = val;
}

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		alert('Game Paused!');
	}
});