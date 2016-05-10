(function() {
    'use strict';

    angular
        .module('app.book')
        .controller('EditBook', EditBook);

    EditBook.$inject = [
        '$location', '$scope', '$routeParams', '$window',
        'common', 'bookData'
    ];

    function EditBook(
        $location, $scope, $routeParams, $window,
        common, bookData) {
        /*jshint validthis: true */
        var vm = this;
        bookData.getBookById($routeParams.bookId).then(successHandler,errorHandler);
        //vm.currentBook = bookData.getBookIdResource().get($routeParams.bookId);
        function successHandler(data) {
            vm.currentBook = data;
        }
        function errorHandler(reason){
            vm.errorMsg = reason;
        }
        vm.onSubmit = function(currentBook) {
            $scope.modalOpen = true;
            // bookData.saveBook(currentBook).then(function() {
            //     $location.path('/books');    
            // },errorHandler);
            
        }
        vm.onCancel = function() {
            $location.path('/books');
        }
        vm.closeModal = function(res) {
            $scope.modalOpen = false;
            if (res === 'yes') {
                bookData.saveBook(this.currentBook).then(function() {
                    $location.path('/books');    
                },errorHandler);    
            }
        }
        vm.modalClosed = function (res) {
            this.closeModal('no');
        }
    }
})();