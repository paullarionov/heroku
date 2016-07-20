angular.module('cityEventsController', [])

// inject the Todo service factory into our controller
    .controller('mainController', ['$scope','$http','CityEvents', function($scope, $http, CityEvents) {
        $scope.formData = {};
        $scope.loading = true;

        // CREATE ==================================================================
        // when submitting the add form, send the text to the node API
        $scope.createEvent = function() {
            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            if ($scope.formData.text != undefined) {
                $scope.loading = true;

                // call the create function from our service (returns a promise object)
                CityEvents.create($scope.formData)

                // if successful creation, call our get function to get all the new events
                    .success(function(data) {
                        $scope.loading = false;
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.cityEvents = data; // assign our new list
                    });
            }
        };


        // GET =====================================================================
        // when landing on the page, get all cityEvents and show them
        // use the service to get all the cityEvents
        CityEvents.get()
            .success(function(data) {
                $scope.cityEvents = data;
                $scope.loading = false;
            });

    }]);