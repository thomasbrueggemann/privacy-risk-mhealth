import alt from "../alt";

// APP ACTIONS
class AppActions {

    constructor() {
        this.generateActions(
            "searchAppsSuccess",
            "searchAppsFail",
            "getIndexSuccess",
            "getIndexFail"
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

    // GET INDEX
    getIndex(id) {
        
        $.ajax({
            "url": "/api/idx/" + id,
            "dataType": "json",
            "type": "GET"
        })
        .done((data) => {
            this.actions.getIndexSuccess(data);
        })
        .fail((jqXhr) => {
            this.actions.getIndexFail(jqXhr);
        });
    }
}

export default alt.createActions(AppActions);
