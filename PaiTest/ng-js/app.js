// /ng-modules/render-index.js
angular
    .module("isama-index", ["common.services", "ngRoute"])
    .config(config)
    .controller("TeamCtrl", ["teamMemberResource", TeamCtrl]);

function config($routeProvider) {
$routeProvider
    .when("/", {
        templateUrl: "/ng-js/all.html",
        controller: "TeamCtrl",
        controllerAs: "vm"
    })
    .when("/about", {
        templateUrl: "/ng-js/about.html",
    })
    .when("/team", {
        templateUrl: "/ng-js/team.html",
        controller: "TeamCtrl",
        controllerAs: "vm"
    })
    .when("/services", {
        templateUrl: "/ng-js/services.html",
    })
    .when("/projects", {
        templateUrl: "/ng-js/projects.html",
    })
    .otherwise({ redirectTo: "/" });
};

function TeamCtrl(teamMemberResource) {
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

//Ready in case we want to add controllers to the static templates
//function aboutCtrl() {
//    var vm = this;
//    vm.title = "about";
//};

//function servicesCtrl() {
//    var vm = this;
//    vm.title = "services";
//};

//function projectsCtrl() {
//    var vm = this;
//    vm.title = "projects";
//};