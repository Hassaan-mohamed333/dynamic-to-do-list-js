// Ensure the script runs after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task to the list
    function addTask() {
        const taskText = taskInput.value.trim(); // Retrieve and trim input value

        if (taskText === '') {
            alert('Please enter a task.'); // Alert if the input is empty
            return;
        }

        // Create the list item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Attach the event listener to remove the task
        removeButton.onclick = () => {
            taskList.removeChild(taskItem); // Remove the task item from the list
        };

        // Append the remove button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field for the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
