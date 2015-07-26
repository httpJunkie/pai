// /ng-modules/render-index.js
angular
    .module("isama-index", ["common.services", "ngRoute"])
    .config(config)
    .controller("TeamMemberListCtrl", ["teamMemberResource", TeamMemberListCtrl])
    .controller("teamController", teamController)
    .controller("contactController", contactController);

function config($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/ng-js/about.html",
            controller: "aboutController",
            controllerAs: "vm"
        })
        .when("/about", {
            templateUrl: "/ng-js/about.html",
            controller: "aboutController",
            controllerAs: "vm"
        })
        .when("/team", {
            templateUrl: "/ng-js/team.html",
            controller: "TeamMemberListCtrl",
            controllerAs: "vm"
        })
        .when("/services", {
            templateUrl: "/ng-js/services.html",
            controller: "servicesController",
            controllerAs: "vm"
        })
        .when("/projects", {
            templateUrl: "/ng-js/projects.html",
            controller: "projectsController",
            controllerAs: "vm"
        })
        .otherwise({ redirectTo: "/" });
};

function TeamMemberListCtrl(teamMemberResource) {
    var vm = this;
    vm.loggedOn = false;
    vm.loggedinUser = "";
    vm.title = "Meet Our Team.";
    vm.subtitle = "We have highly qualified staff with distinguished significant experiences in their field who work under pressure";

    teamMemberResource.query(function (data) {
        vm.teamMembers = data;
    });

    vm.login = function () {
        if (vm.teamMembers.length > 1 && vm.loggedOn == false) {
            for (var i = 0; i < vm.teamMembers.length; i++) {
                if (vm.teamMembers[i].UserName === vm.UserName
                    && vm.teamMembers[i].TmPassword === vm.TmPassword) {
                    vm.loggedOn = true;
                    vm.loggedinUser = vm.teamMembers[i].UserName;
                    //window.location = "/Welcometemplate";
                    return;

                }
            }
        }

    };
    vm.logoff = function () {
        if (vm.loggedOn) {
            vm.loggedOn = false;
        }
    };
}

function aboutController() {
    var vm = this;
    vm.title = "about";
    vm.subtitle = "about page";
};

function servicesController() {
    var vm = this;
    vm.title = "This is a contact page.";
};