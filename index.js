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

document.write(`<table>
    <tr>
        <th>Topic</th>
        <th>Started time</th>
        <th>Finished time</th>
        <th>Total time</th>
        <th>Tasks given</th>
        <th>Tasks finished</th>
        <th>Tasks % done</th>
    </tr>
    <tr>
        <th>${main[1]['topic']}</th>
        <td>${toHours(1, 'startedAt')}</td>
        <td>${toHours(1, 'finishedAt')}</td>
        <td ${hourColor(hoursSum(1))}>${hoursSum(1)}</td>
        <td>${main[1]['tasksGiven']}</td>
        <td>${main[1]['tasksFinished']}</td>
        <td ${taskColor(tasks(1))}>${tasks(1)}%</td>
    </tr>
    <tr>
        <th>${main[2]['topic']}</th>
        <td>${toHours(2, 'startedAt')}</td>
        <td>${toHours(2, 'finishedAt')}</td>
        <td ${hourColor(hoursSum(2))}>${hoursSum(2)}</td>
        <td>${main[2]['tasksGiven']}</td>
        <td>${main[2]['tasksFinished']}</td>
        <td ${taskColor(tasks(2))}>${tasks(2)}%</td>
    </tr>
    <tr>
        <th>${main[3]['topic']}</th>
        <td>${toHours(3, 'startedAt')}</td>
        <td>${toHours(3, 'finishedAt')}</td>
        <td ${hourColor(hoursSum(3))}>${hoursSum(3)}</td>
        <td>${main[3]['tasksGiven']}</td>
        <td>${main[3]['tasksFinished']}</td>
        <td ${taskColor(tasks(3))}>${tasks(3)}%</td>
    </tr>
    <tr>
        <th>${main[4]['topic']}</th>
        <td>${toHours(4, 'startedAt')}</td>
        <td>${toHours(4, 'finishedAt')}</td>
        <td ${hourColor(hoursSum(4))}>${hoursSum(4)}</td>
        <td>${main[4]['tasksGiven']}</td>
        <td>${main[4]['tasksFinished']}</td>
        <td ${taskColor(tasks(4))}>${tasks(4)}%</td>
    </tr>
    <tr>
        <th>${main[5]['topic']}</th>
        <td>${toHours(5, 'startedAt')}</td>
        <td>${toHours(5, 'finishedAt')}</td>
        <td ${hourColor(hoursSum(5))}>${hoursSum(5)}</td>
        <td>${main[5]['tasksGiven']}</td>
        <td>${main[5]['tasksFinished']}</td>
        <td ${taskColor(tasks(5))}>${tasks(5)}%</td>
    </tr>
    <tr>
        <th>${main[6]['topic']}</th>
        <td>${toHours(6, 'startedAt')}</td>
        <td>${toHours(6, 'finishedAt')}</td>
        <td ${hourColor(hoursSum(6))}>${hoursSum(6)}</td>
        <td>${main[6]['tasksGiven']}</td>
        <td>${main[6]['tasksFinished']}</td>
        <td ${taskColor(tasks(6))}>${tasks(6)}%</td>
    </tr>
    <tr>
        <th>${main[7]['topic']}</th>
        <td>${toHours(7, 'startedAt')}</td>
        <td>${toHours(7, 'finishedAt')}</td>
        <td ${hourColor(hoursSum(7))}>${hoursSum(7)}</td>
        <td>${main[7]['tasksGiven']}</td>
        <td>${main[7]['tasksFinished']}</td>
        <td ${taskColor(tasks(7))}>${tasks(7)}%</td>
    </tr>
    <tr>
        <th>${main[8]['topic']}</th>
        <td>${toHours(8, 'startedAt')}</td>
        <td>${toHours(8, 'finishedAt')}</td>
        <td ${hourColor(hoursSum(8))}>${hoursSum(8)}</td>
        <td>${main[8]['tasksGiven']}</td>
        <td>${main[8]['tasksFinished']}</td>
        <td ${taskColor(tasks(8))}>${tasks(8)}%</td>
    </tr>
    <tr>
        <th>${main[9]['topic']}</th>
        <td>${toHours(9, 'startedAt')}</td>
        <td>${toHours(9, 'finishedAt')}</td>
        <td ${hourColor(hoursSum(9))}>${hoursSum(9)}</td>
        <td>${main[9]['tasksGiven']}</td>
        <td>${main[9]['tasksFinished']}</td>
        <td ${taskColor(tasks(9))}>${tasks(9)}%</td>
    </tr>
</table>`)