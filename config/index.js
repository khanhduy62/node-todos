var configValues = require("./config.json")

module.exports = {
    getDbConnectionString: ()=>{
        return `mongodb://${configValues.username}:${configValues.password}@ds151558.mlab.com:51558/node-todos`;
    }
}