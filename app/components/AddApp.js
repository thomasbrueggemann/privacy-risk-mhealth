import React from "react";
import AutoComplete from "./AutoComplete";
import AppStore from "../stores/AppStore";
import AppActions from "../actions/AppActions";

class AddApp extends React.Component {

    // CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = AppStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    // COMPONENT DID MOUNT
	componentDidMount() {
		AppStore.listen(this.onChange);
	}

	// COMPONENT WILL UNMOUNT
	componentWillUnmount() {
		AppStore.unlisten(this.onChange);
	}

	// ON CHANGE
	onChange(state) {
		this.setState(state);
	}

    // KEY UP
    keyUp(e) {

        // ESC clears selection
        if(e.keyCode === 27) {
            this.setState({
                "apps": []
            });
            $("#search-app").val("");
        }

        var v = e.target.value;
        AppActions.searchApps(v);
    }

    // ADD NEW APP
    addNewApp(app) {

        this.setState({
            "apps": []
        });

        this.props.addNewApp(app);
        $("#search-app").val("");
    }

    // RENDER
    render() {

        return (
            <div className="addApp">
                <input type="text" id="search-app" placeholder="Search for apps..." onKeyUp={this.keyUp.bind(this)} />
                <AutoComplete addNewApp={this.addNewApp.bind(this)} apps={this.state.apps} />
            </div>
        );
    }
}

export default AddApp;
