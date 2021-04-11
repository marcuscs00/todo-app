function addTodo() {
	let todoText = document.getElementByID("todo-text");
	let todoSpace = document.getElementByID("todo-space");
	todoSpace.innerHTML = todoText;
}

