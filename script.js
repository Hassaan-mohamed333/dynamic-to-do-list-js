document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Function to add a new task
    function addTask(taskText, save = true) {
        if (!taskText.trim()) {
            alert('Please enter a task.'); // Alert if input is empty
            return;
        }

        // Create a new <li> element
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Assign a class to the <li> element
        taskItem.className = 'task-item';

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Attach an event to remove the task
        removeButton.onclick = () => {
            taskList.removeChild(taskItem); // Remove from DOM
            removeTaskFromLocalStorage(taskText); // Remove from Local Storage
        };

        // Append the remove button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Save the task to Local Storage if needed
        if (save) {
            saveTaskToLocalStorage(taskText);
        }

        // Clear the input field
        taskInput.value = '';
    }

    // Function to save a task to Local Storage
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Function to remove a task from Local Storage
    function removeTaskFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Avoid saving again
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value;
        addTask(taskText); // Add task and save to Local Storage
    });

    // Allow adding tasks using the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value;
            addTask(taskText); // Add task and save to Local Storage
        }
    });
});
