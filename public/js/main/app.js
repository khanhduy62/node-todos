var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController", ['$scope', 'svTodos',function($scope, svTodos){

    $scope.appName = "Dashboard"

    $scope.todos = [];

    $scope.formData = {

    }

    $scope.loading = true

    // load data from api
    svTodos.get().success(function(data){
        $scope.todos = data
        $scope.loading = false
    })

    $scope.createTodo = function () {
        var todo =  {
            text: $scope.formData.text,
            isDone: false
        }
        $scope.loading = true
        svTodos.create(todo)
        .success(function(data){
            $scope.todos = data
            $scope.formData.text = ''
            $scope.loading = false
        })
    }

    $scope.updateTodo = function(todo) {
        console.log(JSON.stringify(todo) + "Update todo")
        $scope.loading = true
        svTodos.update(todo)
        .success(function(data){
            $scope.todos = data
            $scope.loading = false
        })
    };

    $scope.deleteTodo = function(todo) {
        console.log(todo + "Delete todo")
        $scope.loading = true

        svTodos.delete(todo._id)
        .success(function(data){
            $scope.todos = data
            $scope.loading = false
        })
    };
}])

app.run(['editableOptions', function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  }]);