document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
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
        };

        // Append the remove button to the <li>
        taskItem.appendChild(removeButton);

        // Append the <li> to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add tasks using the "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
