const input = document.querySelector('.task__input')
const btn = document.querySelector('.task__btn')
const taskList = document.querySelector('.task__list')

const tasks = []

btn.addEventListener('click', () => {
    let task = {}
    if (input.value === '') {
        throw new Error('You should input your task')
    } else {
        task = {
            content: input.value,
            isComplete: false
        }
    }
    input.value = ''
    tasks.push(task)
    renderList(tasks)
})

function renderList(tasks) {
    if (tasks.length === 0) {
        taskList.innerHTML = `<span class="task__none">No tasks to complete.</span>`
    } else {
        let list = ''

        tasks.forEach((task, idx) => {
            list += `<li class="task__item">
                    <span class="task__num">${idx + 1}.</span>
                    <span class="task__content ${task.isComplete ? "task__content--complete" : ""}">${task.content}.</span>
                    <input class="task__check" type="checkbox" ${task.isComplete ? "checked" : ''} onclick="isChecked(${idx})">
                    <button class="task__remove" onclick="removeTask(${idx})">Remove</button>
                 </li>`
        })

        taskList.innerHTML = list
    }
}

function isChecked(i) {
    tasks[i].isComplete = !tasks[i].isComplete
    renderList(tasks)
}

function removeTask(i) {
    tasks.splice(i, 1)
    renderList(tasks)
}

renderList(tasks)
