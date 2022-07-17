const addTaskButton = document.querySelector('.add_task')
const inputTaskTitle = document.querySelector('.task_title');
const tasks = document.querySelector('.tasks')


addTaskButton.onclick = function(event) {
    event.preventDefault();
    let value = inputTaskTitle.value;
    if(value.trim()) tasks.innerHTML += createTask(value)
}

function createTask(value) {
    return `
    <div class="task">
    <h3>${value}</h3>
        <div class="task_right">
            <span>00:00:00</span>
            <button>Start timer</button>
            <div class="task_options">
                Options
            </div>
        </div>
    </div>
    `
}

