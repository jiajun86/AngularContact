'use strict';

/* Controllers */
angular.module('myApp.controllers', [
]).controller('Contact', [
    '$scope',
    function ($scope) {
        var contacts = [
            {
                name: "Contact 1",
                address: "1, a street, a town, a city, AB12 3CD",
                tel: "0123456789",
                email: "anemail@me.com",
                type: "family"
            },
            {
                name: "Contact 2",
                address: "1, a street, a town, a city, AB12 3CD",
                tel: "0123456789",
                email: "anemail@me.com",
                type: "family"
            },
            {
                name: "Contact 3",
                address: "1, a street, a town, a city, AB12 3CD",
                tel: "0123456789",
                email: "anemail@me.com",
                type: "friend"
            },
            {
                name: "Contact 4",
                address: "1, a street, a town, a city, AB12 3CD",
                tel: "0123456789",
                email: "anemail@me.com",
                type: "colleague"
            },
            {
                name: "Contact 5",
                address: "1, a street, a town, a city, AB12 3CD",
                tel: "0123456789",
                email: "anemail@me.com",
                type: "family"
            },
            {
                name: "Contact 6",
                address: "1, a street, a town, a city, AB12 3CD",
                tel: "0123456789",
                email: "anemail@me.com",
                type: "colleague"
            },
            {
                name: "Contact 7",
                address: "1, a street, a town, a city, AB12 3CD",
                tel: "0123456789",
                email: "anemail@me.com",
                type: "friend"
            },
            {
                name: "Contact 8",
                address: "1, a street, a town, a city, AB12 3CD",
                tel: "0123456789",
                email: "anemail@me.com",
                type: "family"
            }
        ];
        $scope.contacts = angular.copy(contacts);
        $scope.typeFilters = [
        ];

        angular.forEach($scope.contacts, function (contact) {
            if ($scope.typeFilters.indexOf(contact.type) < 0) {
                $scope.typeFilters.push(contact.type);
            }
        });

        $scope.addContact = function () {
            if ($scope.type) {
                if ($scope.typeFilters.indexOf($scope.type) < 0) {
                    $scope.typeFilters.push($scope.type);
                }
            }

            $scope.contacts.push({
                name: $scope.name,
                address: $scope.address,
                tel: $scope.tel,
                email: $scope.email,
                type: $scope.type
            });
        };

        $scope.editContact = function (index, contact) {
            if (contact.newType) {
                if ($scope.typeFilters.indexOf(contact.newType) < 0) {
                    $scope.typeFilters.push(contact.newType);
                    contact.type = contact.newType;
                }
            }

            delete contact.newType;
            $scope.contacts[index] = contact;
        };

        $scope.removeContact = function (name) {
            angular.forEach($scope.contacts, function (contact, index) {
                if (contact.name === name) {
                    $scope.contacts.splice(index, 1);
                }
            });
        };

        $scope.cancel = function (index) {
            $scope.contacts[index] = contacts[index];
        };

        $scope.changeType = function (type) {
            if (!type) {
                $scope.addType = !$scope.addType;
            }
        };
    }
]);