angular.module('app')
    .service('ChecklistsSvc', function($http) {
    this.fetch = function() {
        return $http.get('/api/checklists');
    }
    this.create = function(checklist) {
        return $http.post('/api/checklists', checklist);
    }
    this.fetchById = function(id) {
        return $http.get('/api/checklists/' + id)
    }
})
