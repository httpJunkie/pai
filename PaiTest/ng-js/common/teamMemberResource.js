
    angular
        .module("common.services")
        //Register factory service
        .factory("teamMemberResource",
        ["$resource", "appSettings", teamMemberResource]);

    //setup the data endpoint as a service with optional id param..
    function teamMemberResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "api/TeamMember/:id");
    }