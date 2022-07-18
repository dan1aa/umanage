const addTaskButton = document.querySelector('.add_task')
const inputTaskTitle = document.querySelector('.task_title');
const tabLinks = document.querySelectorAll('.tab_links__link');
const allTasksWrapper = document.querySelectorAll('.all_tasks_wrapper')
const startTimerButtons = document.querySelectorAll('.start_timer')
const stopTimerButtons = document.querySelectorAll('.stop_timer')

tabLinks.forEach(button => {
    button.onclick = function () {
        let id = this.dataset.id;
        for(let tabLink of tabLinks) {
            tabLink.classList.remove('active')
        }
        for(let taskWrapper of allTasksWrapper) {
            taskWrapper.style.display = 'none'
        }
        this.classList.toggle('active')
        document.querySelector(`.${id}`).style.display = 'flex';
    }
})


addTaskButton.onclick = function (event) {
    event.preventDefault();
    let value = inputTaskTitle.value;
    if (value.trim()) { 
        allTasksWrapper[0].innerHTML += createTask(value)
        inputTaskTitle.value = ''
        inputTaskTitle.style.border = '1px solid rgb(185, 185, 185)' 
        return;
    }
    inputTaskTitle.style.border = '1px solid tomato' 
}

for (let i = 0; i < startTimerButtons.length; i++) {
    startTimerButtons[i].onclick = function () {
        this.style.display = 'none'
        stopTimerButtons[i].style.display = 'flex'
    }
    stopTimerButtons[i].onclick = function () {
        this.style.display = 'none'
        startTimerButtons[i].style.display = 'flex'
    }
}

function createTask(value) {
    return `
    <div class="task">
        <h3>${value}</h3>
        <div class="task_right">
            <span class="problem_stopwatch">00:00:00</span>
            <button class="start_timer">Start timer</button>
            <button class="stop_timer" style="display: none;">Stop timer</button>
            <div class="task_options">
                Options
            </div>
        </div>
    </div>
    `
}