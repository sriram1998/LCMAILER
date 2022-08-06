const log4js = require("log4js");
const fs = require('fs')
log4js.configure({
  appenders: {
    "stdout": { type: "stdout" },
    "file": { type: "file", filename: "logs/out.log" }
  },
  categories: {
    default: { appenders: ['stdout', 'file'], level: 'info' }
  }
});
exports.logger = log4js.getLogger();
exports.readLog = () => {
  let log = fs.readFileSync('logs/out.log', 'utf8',
    (error, content) => {
      if (error) {
        log4js.getLogger().error(error);
        return error;
      }
      return content;
    });
  return log;
}