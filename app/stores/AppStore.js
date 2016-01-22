import alt from "../alt";
import AppActions from "../actions/AppActions";

class AppStore {

	constructor() {
		this.bindActions(AppActions);
		this.apps = [];
		this.idx = {};
	}

	// SEARCH APPS SUCCESS
  	searchAppsSuccess(data) {
    	this.apps = data;
  	}

	// SEARCH APPS FAIL
  	searchAppsFail(jqXhr) {
    	// Handle multiple response formats, fallback to HTTP status code number.
    	console.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  	}

	// GET INDEX SUCCESS
	getIndexSuccess(data) {
    	this.idx[data.id] = data;
		this.apps = [];
  	}

	// GET INDEX FAIL
	getIndexFail(jqXhr) {
    	// Handle multiple response formats, fallback to HTTP status code number.
    	console.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  	}
}

export default alt.createStore(AppStore);
