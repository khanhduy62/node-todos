var Todos = require("../models/todoModel");
module.exports = function(app) {
  app.get("/api/setupTodos", function(req, res){
      
    // setup seed data 
    var seedTodos = [
        {
            text: "Learn NODEJS",
            isDone: false
        }, 
        {
            text: "Learn ANGULARJS",
            isDone: false
        },
        {
            text: "Write completed app",
            isDone: false
        }
    ];

    Todos.create(seedTodos, function(err, results){
        res.send(results)
    });
  })
}