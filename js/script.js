"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    // Function to handle adding a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        const regex = /^[A-Z][A-Za-z]*$/;
        let reg_me = regex.test(taskText);
        console.log(reg_me);
        if (reg_me) {
            // 1. Create the new <li> element
            const listItem = document.createElement('li');
            // 2. Add the task text
            // Create a span for the text content to separate it from the button
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            // 3. Create the Delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            // 4. Set up the delete functionality (Requirement: Delete the specific task)
            deleteButton.addEventListener('click', function () {
                // 'this.parentNode' refers to the parent element of the button (((((((  and this is mean li )))))))
                taskList.removeChild(this.parentNode);
            });
            // 5. Append the task text and the delete button to the <li>
            listItem.appendChild(checkbox);
            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteButton);
            // 6. Append the new <li> to the <ul>
            taskList.appendChild(listItem);
            // 7. Clear the input field
            taskInput.value = '';
        }
        else {
            alert("must start with big letters and no spaces and numbers");
            return;
        }
    };
    // Event listeners
    // 1. Add task when the "Add" button is clicked
    addButton.addEventListener('click', addTask);
    // 2. Add task when the Enter key is pressed in the input field
    taskInput.addEventListener('keypress', function (press) {
        if (press.key === 'Enter') {
            addTask();
        }
    });
});
