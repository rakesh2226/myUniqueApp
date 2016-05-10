(function() {
    'use strict';

    angular
        .module('app.book')
        .controller('Books', Books);

    Books.$inject = [
        '$location', '$scope', '$routeParams', '$window',
        'common', 'bookData', '$route', 'logger'
    ];

    function Books(
        $location, $scope, $routeParams, $window,
        common, bookData, $route, logger) {
        /*jshint validthis: true */
        var vm = this;
        vm.showbtn = false;
        vm.headerText = "(click anywhere in header to Hide body)";
        //vm.books = bookData.getBookResource().query();
        bookData.getAllBooks().then(successHandler,errorHandler);
        function successHandler(data) {
            vm.books = data;
            logger.debug("Books Loaded");
        }

        function errorHandler(reason) {
            vm.errorMsg = reason;
        }
        vm.deleteRec = function(book) {
            var indx = $scope.b.books.indexOf(book);
            if (indx !== -1) {
                $scope.b.books.splice(indx, 1);
            }
            // service implementation

            // bookData.deleteBook(id).then(function(data) {
            //     $route.reload();
            // },errorHandler);
        }
        vm.editRec = function(bookId) {
            $location.path('/books/'+bookId);
        }
        vm.headerClick = function(bookObj) {
            debugger;
            if (bookObj) {
                $scope.b.headerText = "(click anywhere in header to Show body)";
            } else {
                $scope.b.headerText = "(click anywhere in header to Hide body)";
            }
        }
        console.log("Books Scope ", $scope);
    }
})();