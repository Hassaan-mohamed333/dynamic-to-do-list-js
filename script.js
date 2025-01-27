document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Function to add a new task
    function addTask(saveToLocalStorage = true) {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        if (taskText === '') {
            alert('Please enter a task.'); // Alert if the input field is empty
            return;
        }

        // Create a new <li> element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Assign a class to the <li> element
        taskItem.className = 'task-item'; // Use className instead of classList.add

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';

        // Assign a class to the button
        removeButton.className = 'remove-btn'; // Use className to add the class

        // Attach an event to the "Remove" button to delete the task
        removeButton.onclick = () => {
            taskList.removeChild(taskItem); // Remove the task from the list
            removeTaskFromLocalStorage(taskText); // Remove task from Local Storage
        };

        // Append the remove button to the <li>
        taskItem.appendChild(removeButton);

        // Append the <li> to the task list
        taskList.appendChild(taskItem);

        // Save the task to Local Storage if needed
        if (saveToLocalStorage) {
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
        storedTasks.forEach(taskText => {
            taskInput.value = taskText; // Temporarily set the input value
            addTask(false); // Add task without saving to Local Storage again
        });
        taskInput.value = ''; // Clear the input value after loading tasks
    }

    addButton.addEventListener('click', () => addTask());

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
