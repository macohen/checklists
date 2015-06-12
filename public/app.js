/**
 * Created by cohenma on 6/10/15.
 */
var app = angular.module('app', []);
app.controller('ChecklistsController', function($scope) {
    $scope.checklists = [
        {title: 'Title One'},
        {title: 'Title Two'},
        {title: 'Title Three'}
    ]

    $scope.addChecklist = function () {
        if($scope.checklistTitle) {
            $scope.checklists.unshift(
                {
                    title: $scope.checklistTitle
                }
            )
            $scope.checklistTitle = null;
        }
    }

})
