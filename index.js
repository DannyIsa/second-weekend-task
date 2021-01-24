let main = [ 
    {topic: 'HTML',
    startedAt: new Date(2021, 0, 10, 9, 30),
    finishedAt: new Date(2021, 0, 10, 20, 00),
    tasksGiven: 24,
    tasksFinished: 24},
    {topic: 'CSS',
    startedAt: new Date(2021, 0, 11, 9, 30),
    finishedAt: new Date(2021, 0, 11, 21, 00),
    tasksGiven: 30,
    tasksFinished: 20},
    {topic: 'GIT hub',
    startedAt: new Date(2021, 0, 12, 9, 30),
    finishedAt: new Date(2021, 0, 12, 12, 00),
    tasksGiven: 5,
    tasksFinished: 5}, 
    {topic: 'More HTML',
    startedAt: new Date(2021, 0, 12, 12, 00),
    finishedAt: new Date(2021, 0, 12, 20, 00),
    tasksGiven: 19,
    tasksFinished: 10},
    {topic: 'Java Script',
    startedAt: new Date(2021, 0, 17, 9, 30),
    finishedAt: new Date(2021, 0, 17, 21, 45),
    tasksGiven: 19,
    tasksFinished: 16},
    {topic: 'Loops',
    startedAt: new Date(2021, 0, 18, 10, 00),
    finishedAt: new Date(2021, 0, 18, 23, 00),
    tasksGiven: 25,
    tasksFinished: 5},
    {topic: 'Conditions',
    startedAt: new Date(2021, 0, 19, 8, 30),
    finishedAt: new Date(2021, 0, 19, 18, 00),
    tasksGiven: 39,
    tasksFinished: 35},
    {topic: 'Arrays',
    startedAt: new Date(2021, 0, 20, 9, 30),
    finishedAt: new Date(2021, 0, 21, 00, 00),
    tasksGiven: 15,
    tasksFinished: 15},
    {topic: 'Objects',
    startedAt: new Date(2021, 0, 21, 9, 30),
    finishedAt: new Date(2021, 0, 21, 23, 57),
    tasksGiven: 29,
    tasksFinished: 17}
]

for (const task of main){
    task.totalHours = hoursSum(task);
    task.percentageOfTasksDone = calcPercent(task);
}

function toHours(x, y) { //shows only times hours
    let d = main[x][y];
    return d.toLocaleTimeString()
}



function hoursSum(task){    //sum of the hour range
    let sd = task['startedAt'];
    let fd = task['finishedAt'];
    return Math.abs(fd - sd) / 36e5
}



function hourColor(x){    //gives different colors to different hour range
    if (x < 9){
        return "lightblue"
    }else if (x < 11){
        return "blue"
    }else {
        return "darkblue"
    }
}



function calcPercent(task){              //percentage of tasks completed
    let ng = task['tasksGiven']
    let nf = task['tasksFinished']
    return Math.floor((nf / ng) * 100)
}



function taskColor(x){    //gives different colors to different percentage of tasks completed
    
    if (x < 60){
        return "lightgreen"
    }else if (x < 90){
        return "greenyellow"
    }else {
        return "green"
    }
}


const body = document.body;
const table = document.createElement('table');
body.appendChild(table);
const rowHeadings = document.createElement('tr');
table.appendChild(rowHeadings);
// const header = document.createElement('th')
// header.innerText = 'Topic'
rowHeadings.innerHTML = `<th class='topic'>Topic</th>
                        <th class='topic'>Started at</th>
                        <th class='topic'>Finished at</th>
                        <th class='topic'>Total time</th>
                        <th class='topic'>Tasks given</th>
                        <th class='topic'>Tasks finished</th>
                        <th class='topic'>Percentage of tasks done</th>`;

for (const task of main){

    const row = document.createElement('tr');
    const topic = document.createElement('td');
    topic.innerText = task.topic;
    topic.classList.add('topic');
    const startedAt = document.createElement('td');
    startedAt.innerText = task.startedAt.toLocaleTimeString();
    const finishedAt = document.createElement('td');
    finishedAt.innerText = task.finishedAt.toLocaleTimeString();
    const totalHours = document.createElement('td');
    totalHours.innerText = task.totalHours;
    totalHours.style.backgroundColor = hourColor(task.totalHours);
    const tasksGiven = document.createElement('td');
    tasksGiven.innerText = task.tasksGiven;
    const tasksFinished = document.createElement('td');
    tasksFinished.innerText = task.tasksFinished;
    const percentageOfTasksDone = document.createElement('td');
    percentageOfTasksDone.innerText = task.percentageOfTasksDone;
    percentageOfTasksDone.style.backgroundColor = taskColor(task.percentageOfTasksDone);
    row.append(topic, startedAt, finishedAt, totalHours, tasksGiven, tasksFinished, percentageOfTasksDone);
    table.appendChild(row);
}
