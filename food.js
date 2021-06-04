import {touchSnake, expandSnake} from './snake.js';
import {setCounter} from './game.js';

let foodVal = 1;
export let multiplier = 10;
let food = getFoodPos();

export function update() {
	if (touchSnake(food)) {
		expandSnake(foodVal);
		setCounter(foodVal * multiplier);
		food = getFoodPos();
	}
}

export function draw(gameBoard) {
	const foodElement = document.createElement('div');
	foodElement.style.gridRowStart = food.y;
	foodElement.style.gridColumnStart = food.x;
	foodElement.classList.add('food');
	gameBoard.appendChild(foodElement);
}

function getFoodPos() {
	let newFood;
	while (newFood == null || touchSnake(newFood)) {
		newFood = {x: Math.floor(Math.random() * 21) + 1, y: Math.floor(Math.random() * 21) + 1}
	}

	return newFood;
}

export function setMultiplier(val) {
	multiplier = val;
}

export function getMultiplier() {
	return multiplier;
}