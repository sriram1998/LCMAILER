const service = require("./services/SQLService.js");

const config = require("./config/app.config.json");


service.getProblems(config.difficulty, config.concepts);