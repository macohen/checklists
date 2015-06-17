angular.module('app')
    .controller('ChecklistsController', function($scope, ChecklistsSvc) {
    ChecklistsSvc.fetch().success(function(checklists) {
        $scope.checklists = checklists;
    })

    $scope.addChecklist = function () {
        if($scope.checklistTitle) {
            ChecklistsSvc.create({
                    title: $scope.checklistTitle
                }
            ).success(function(checklist) {
                    $scope.checklists.unshift(checklist);
                    $scope.checklistTitle = null;
                }
            )

        }
    }
    ChecklistsSvc.fetch().success(function(checklists) {
        $scope.checklists = checklists;
    })


})
