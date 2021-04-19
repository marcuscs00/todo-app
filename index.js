function addTodo() {
	let todoText = document.getElementById('todo-text');
	let todoSpace = document.getElementById('todo-space');
	todoSpace.innerHTML = `<p>${todoText.value}</p>`;
}

