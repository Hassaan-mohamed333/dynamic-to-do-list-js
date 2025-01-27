document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim input value

        if (taskText === '') {
            alert('Please enter a task.'); // Alert if input is empty
            return;
        }

        // Create the <li> element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        taskItem.className = 'task-item'; // Add a class directly using className

        // Create the "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn'; // Add a class directly using className

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(taskItem); // Remove the task item from the list
        };

        // Append the button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
