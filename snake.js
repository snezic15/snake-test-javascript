import {getInput} from './input.js';

const snakeBody = [{x: 11, y: 11}];
let newSegments = 0;

export function update() {
	addSegment();
	const input = getInput();

	for (let i = snakeBody.length - 2; i >= 0; i--) {
		snakeBody[i + 1] = {...snakeBody[i]};
	}

	snakeBody[0].x += input.x;
	snakeBody[0].y += input.y;
	boardBoundries();
}

export function draw(gameBoard) {
	snakeBody.forEach(section => {
		const snakePart = document.createElement('div');
		snakePart.style.gridRowStart = section.y;
		snakePart.style.gridColumnStart = section.x;
		snakePart.classList.add('snake');
		gameBoard.appendChild(snakePart);
	})
}

export function expandSnake(increment) {
	newSegments += increment;
}

export function touchSnake(position, {headTouch = false} = {}) {
	return snakeBody.some((segment, index) => {
		if (headTouch && index === 0) return false;
		return segment.x == position.x && segment.y == position.y;
	})
}

export function snakeIntersection() {
	return touchSnake(snakeBody[0], {headTouch: true});
}

function addSegment() {
	for (let i = 0; i < newSegments; i++) {
		snakeBody.push({...snakeBody[snakeBody.length -1]});
	}

	newSegments = 0;
}

function boardBoundries() {
	if (snakeBody[0].x > 21) snakeBody[0].x = 1;
	if (snakeBody[0].x < 1) snakeBody[0].x = 21;
	if (snakeBody[0].y > 21) snakeBody[0].y = 1;
	if (snakeBody[0].y < 1) snakeBody[0].y = 21;	
}