const SQLservice = require("./services/SQLService.js");

const mailer = require("./services/mailer.js");

const config = require("../config/app.config.json");

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

async function retrieveAndMail(){
    var problems;

    problems = await SQLservice.getProblems(config.difficulty, config.concepts);

    var number = getRandomInt(problems.length);

    var id = problems[number].id;
    var title = problems[number].title;
    var link = problems[number].link;
    var difficulty = problems[number].difficulty;

    var mailStatus = await mailer.sendMail(title, link, difficulty);

    if(mailStatus){
        console.log(mailStatus);
    }

    SQLservice.updateStatus(id).then((response) => {
        console.log(response);
        return response;
    });

    
}

retrieveAndMail();



