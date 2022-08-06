require("dotenv").config();

module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_ROOT_PASSWORD,
    DB: process.env.DATABASE,
    PORT: process.env.DB_DOCKER_PORT
};