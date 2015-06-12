/**
 * Created by cohenma on 6/10/15.
 */
var app = angular.module('app', []);
app.controller('ChecklistsController', function($scope, $http) {
    $http.get('http://localhost:3100/api/checklists')
        .success(function(checklists) {
            $scope.checklists = checklists;
        })

    $scope.addChecklist = function () {
        if($scope.checklistTitle) {
            $http.post('/api/checklists', {
                title: $scope.checklistTitle
                }
            ).success(function(checklist) {
                    $scope.checklists.unshift(checklist);
                    $scope.checklistTitle = null;
                }
            )

        }
    }

})
