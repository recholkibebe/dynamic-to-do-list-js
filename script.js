document.addEventListener('DOMContentLoaded', () => {
	    const addButton = document.getElementById('add-task-btn');
	    const taskInput = document.getElementById('task-input');
	    const taskList = document.getElementById('task-list');

	    // Function to add a new task
	//     function addTask(taskText = null, save = true) {
	//             // Use the input value if taskText not passed (normal input)
	//                     const text = taskText || taskInput.value.trim();
	//
	//                             if (text === '') {
	//                                         alert('Please enter a task.');
	//                                                     return;
	//                                                             }
	//
	//                                                                     // Create the list item (li)
	//                                                                             const li = document.createElement('li');
	//                                                                                     li.textContent = text;
	//
	//                                                                                             // Create the remove button
	//                                                                                                     const removeBtn = document.createElement('button');
	//                                                                                                             removeBtn.textContent = 'Remove';
	//                                                                                                                     removeBtn.className = 'remove-btn';
	//
	//                                                                                                                             // Add click event to remove the task
	//                                                                                                                                     removeBtn.onclick = () => {
	//                                                                                                                                                 li.remove();
	//                                                                                                                                                             removeFromStorage(text);
	//                                                                                                                                                                     };
	//
	//                                                                                                                                                                             // Append remove button to li and li to task list
	//                                                                                                                                                                                     li.appendChild(removeBtn);
	//                                                                                                                                                                                             taskList.appendChild(li);
	//
	//                                                                                                                                                                                                     // Save to localStorage if needed
	//                                                                                                                                                                                                             if (save) {
	//                                                                                                                                                                                                                         const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
	//                                                                                                                                                                                                                                     storedTasks.push(text);
	//                                                                                                                                                                                                                                                 localStorage.setItem('tasks', JSON.stringify(storedTasks));
	//                                                                                                                                                                                                                                                         }
	//
	//                                                                                                                                                                                                                                                                 // Clear input field
	//                                                                                                                                                                                                                                                                         taskInput.value = '';
	//                                                                                                                                                                                                                                                                             }
	//
	//                                                                                                                                                                                                                                                                                 // Remove task from localStorage
	//                                                                                                                                                                                                                                                                                     function removeFromStorage(taskText) {
	//                                                                                                                                                                                                                                                                                             const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
	//                                                                                                                                                                                                                                                                                                     const updatedTasks = tasks.filter(task => task !== taskText);
	//                                                                                                                                                                                                                                                                                                             localStorage.setItem('tasks', JSON.stringify(updatedTasks));
	//                                                                                                                                                                                                                                                                                                                 }
	//
	//                                                                                                                                                                                                                                                                                                                     // Load tasks from localStorage on page load
	//                                                                                                                                                                                                                                                                                                                         function loadTasks() {
	//                                                                                                                                                                                                                                                                                                                                 const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
	//                                                                                                                                                                                                                                                                                                                                         storedTasks.forEach(task => addTask(task, false));
	//                                                                                                                                                                                                                                                                                                                                             }
	//
	//                                                                                                                                                                                                                                                                                                                                                 // Attach event listeners
	//                                                                                                                                                                                                                                                                                                                                                     addButton.addEventListener('click', () => addTask());
	//
	//                                                                                                                                                                                                                                                                                                                                                         taskInput.addEventListener('keypress', (event) => {
	//                                                                                                                                                                                                                                                                                                                                                                 if (event.key === 'Enter') {
	//                                                                                                                                                                                                                                                                                                                                                                             addTask();
	//                                                                                                                                                                                                                                                                                                                                                                                     }
	//                                                                                                                                                                                                                                                                                                                                                                                         });
	//
	//                                                                                                                                                                                                                                                                                                                                                                                             // Load tasks when page loads
	//                                                                                                                                                                                                                                                                                                                                                                                                 loadTasks();
	//                                                                                                                                                                                                                                                                                                                                                                                                 });
	//
