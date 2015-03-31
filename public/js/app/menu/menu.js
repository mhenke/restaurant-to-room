(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('MenuController', MenuController);
        
    MenuController.$inject = ['api','$routeParams'];
    
    function MenuController(api,$routeParams.restId) {
        var vm = this;
        api.getRestaurantDatails()
            .then(function(data) {
                vm.restaurant = data;
            })
    }
}());