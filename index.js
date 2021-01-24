let main = [
    'Topic', 
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


function toHours(x, y) {
    let d = main[x][y];
    return d.toLocaleTimeString()
}

function hoursSum(x){
    let sd = main[x]['startedAt'];
    let fd = main[x]['finishedAt'];
    return Math.abs(fd - sd) / 36e5
}

function hourColor(x){
    if (x < 9){
        return "style = 'background-color: lightblue'"
    }else if (x < 11){
        return "style = 'background-color: blue'"
    }else {
        return "style = 'background-color: darkblue'"
    }
}

function tasks(x){
    let ng = main[x]['tasksGiven']
    let nf = main[x]['tasksFinished']
    return Math.floor((nf / ng) * 100)
}

function taskColor(x){
    
    if (x < 60){
        return "style = 'background-color: lightgreen'"
    }else if (x < 90){
        return "style = 'background-color: greenyellow'"
    }else {
        return "style = 'background-color: green'"
    }
}

