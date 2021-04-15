function addTodo() {
	let todoText = document.getElementById('todo-text');
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(todoText));
	todoSpace.appendChild(li);
}

