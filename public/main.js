const addTaskButton = document.querySelector('.add_task')
const inputTaskTitle = document.querySelector('.task_title');
const tabLinks = document.querySelectorAll('.tab_links__link');
const problems = document.querySelector('.problems')
const inprogress = document.querySelector('.inprogress')
const done = document.querySelector('.done')
const startTimerButtons = document.querySelectorAll('.start_timer')
const stopTimerButtons = document.querySelectorAll('.stop_timer')

tabLinks.forEach(button => {
    button.onclick = function () {
        let id = this.dataset.id;
        problems.style.display = 'none'
        inprogress.style.display = 'none'
        done.style.display = 'none'
        document.querySelector(`.${id}`).style.display = 'flex';
    }
})


addTaskButton.onclick = function (event) {
    event.preventDefault();
    let value = inputTaskTitle.value;
    if (value.trim()) { 
        problems.innerHTML += createTask(value)
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
