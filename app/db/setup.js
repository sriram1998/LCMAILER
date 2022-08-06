require("dotenv").config();

const { logger } = require("../utils/logger");
const seedService = require("./seedDB");
const createSchema = require("./createDB");


async function setup(){
    var setupStatus = await createSchema.createDB();

    logger.info("Status of schema setup is ", setupStatus);
    
    var seedStatus = await seedService.checkSeed();

    if(!seedStatus){
        var loadResult = await seedService.insertDataIntoDB();
        logger.info("status of data loading is ", loadResult);
    }
}

setup();