let input = {x: 0, y: 0};
let lastInput = {x: 0, y: 0};

window.addEventListener('keydown', e => {
	switch(e.key) {
		case 'ArrowUp':
			if (lastInput.y !== 0) break;
			input = {x: 0, y: -1};
			break;
		
		case 'ArrowDown':
			if (lastInput.y !== 0) break;
			input = {x: 0, y: 1};
			break;
		
		case 'ArrowLeft':
			if (lastInput.x !== 0) break;
			input = {x: -1, y: 0};
			break;
		
		case 'ArrowRight':
			if (lastInput.x !== 0) break;
			input = {x: 1, y: 0};
			break;
	}
})

export function getInput() {
	lastInput = input;
	return input;
}