import alt from "../alt";

// APP ACTIONS
class AppActions {

    constructor() {
        this.generateActions(
            "searchAppsSuccess",
            "searchAppsFail"
        );
    }

    // GET SESSIONS
    searchApps(query) {

        $.ajax({
            "url": "/api/search/" + encodeURIComponent(query),
            "dataType": "json",
            "type": "GET"
        })
        .done((data) => {
            this.actions.searchAppsSuccess(data);
        })
        .fail((jqXhr) => {
            this.actions.searchAppsFail(jqXhr);
        });
    }
}

export default alt.createActions(AppActions);
