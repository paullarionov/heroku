angular.module('cityEventsService', [])

// super simple service
// each function returns a promise object
    .factory('CityEvents', ['$http',function($http) {
        return {
            get : function() {
                return $http.get('/api/cityEvent');
            },
            create : function(eventData) {
                return $http.post('/api/cityEvent', eventData);
            },
            delete : function(id) {
                return $http.delete('/api/cityEvent/' + id);
            }
        }
    }]);