import React from "react";
import AppStore from "../stores/AppStore";
import AppActions from "../actions/AppActions";

class AppRow extends React.Component {

    // CONSTRUCTOR
    constructor(props) {
        super(props);
        this.state = AppStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    // REMOVE APP
    removeApp() {
        this.props.removeApp(this.props.app);
    }

    // COMPONENT DID MOUNT
	componentDidMount() {
		AppStore.listen(this.onChange);

        // get index
        AppActions.getIndex(this.props.app.id);

        $(".influence-cell").children().tooltipster({
            "position": "top",
            "content": "This factor has the most influence on the privacy risk index"
        });
	}

	// COMPONENT WILL UNMOUNT
	componentWillUnmount() {
		AppStore.unlisten(this.onChange);
	}

	// ON CHANGE
	onChange(state) {
		this.setState(state);
	}

    // RENDER
    render() {

        var secure_transmission = "no data connection", data_reasonable = "-";
        if(this.props.app.personal_target.length > 0) {
            secure_transmission = (this.props.app.secure_transmission === true) ? <i className="fa fa-check fa-lg"></i> : <i className="fa fa-times fa-lg"></i>;
        }

        data_reasonable = (this.props.app.data_reasonable === true) ? <i className="fa fa-check fa-lg"></i> : <i className="fa fa-times fa-lg"></i>;

        var store_url, store_name, store_icon;
        if(this.props.app.rater === "thomas") {
            store_name = "Apple AppStore";
            store_url = "https://itunes.apple.com/app/store/id" + this.props.app.store_id;
            store_icon = <i className="fa fa-apple fa-fw"></i>;
        }
        else {
            store_name = "Google PlayStore";
            store_url = "https://play.google.com/store/apps/details?id=" + this.props.app.package_name;
            store_icon = <i className="fa fa-android fa-fw"></i>;
        }

        // fetch index
        this.props.app.privacy_index = this.state.idx[this.props.app.id];

        // determine idx color
        var idx_class = "idx";
        if(this.props.app.privacy_index <= 15) {
            idx_class += " idx_green";
        }
        else if(this.props.app.privacy_index > 15 && this.props.app.privacy_index <= 50) {
            idx_class += " idx_orange";
        }
        else {
            idx_class += " idx_red";
        }

        var categoryCellClass = "app-cell";
        var categoryCellInfluence = null;
        if(this.props.app.influence_key === "category") {
            categoryCellClass += " influence-cell";
            categoryCellInfluence = <i className="fa fa-bolt fa-influence"></i>;
        }

        var personalTargetCellClass = "app-cell";
        var personalTargetCellInfluence = null;
        if(this.props.app.influence_key === "personal_target") {
            personalTargetCellClass += " influence-cell";
            personalTargetCellInfluence = <i className="fa fa-bolt fa-influence"></i>;
        }

        var unspecificTargetCellClass = "app-cell";
        var unspecificTargetCellInfluence = null;
        if(this.props.app.influence_key === "category") {
            unspecificTargetCellClass += " influence-cell";
            unspecificTargetCellInfluence = <i className="fa fa-bolt fa-influence"></i>;
        }

        var dataReasonableCellClass = "app-cell";
        var dataReasonableCellInfluence = null;
        if(this.props.app.influence_key === "category") {
            dataReasonableCellClass += " influence-cell";
            dataReasonableCellInfluence = <i className="fa fa-bolt fa-influence"></i>;
        }

        var secureCellClass = "app-cell";
        var secureCellInfluence = null;
        if(this.props.app.influence_key === "category") {
            secureCellClass += " influence-cell";
            secureCellInfluence = <i className="fa fa-bolt fa-influence"></i>;
        }

        return (<div className="app" id={"app" + this.props.app.id}>
            <div className="app-cell" dangerouslySetInnerHTML={{__html: this.props.app.name}}></div>
            <div className="app-cell">{store_icon}<a href={store_url} target="_blank">{store_name}</a></div>
            <div className="app-cell"><span className={idx_class}>{this.props.app.privacy_index}</span></div>
            <div className="app-cell">{parseInt(this.props.app.privacy_index_confidence * 100)}%</div>
            <div className={categoryCellClass} data-weight="category">{categoryCellInfluence}{(this.props.app.personal_category.length > 0) ? this.props.app.personal_category.join(", ") : "none"}</div>
            <div className="app-cell">
                {(this.props.app.login === true) ? <i className="fa fa-check fa-lg"></i> : <i className="fa fa-times fa-lg"></i>}
            </div>
            <div className={personalTargetCellClass} data-weight="personal_target">{personalTargetCellInfluence}{(this.props.app.personal_target.length > 0) ? this.props.app.personal_target.join(", ") : "nowhere"}</div>
            <div className={unspecificTargetCellClass} data-weight="unspecific_target">{unspecificTargetCellInfluence}{(this.props.app.unspecific_target.length > 0) ? this.props.app.unspecific_target.join(", ") : "no"}</div>
            <div className={dataReasonableCellClass} data-weight="data_reasonable">{dataReasonableCellInfluence}{data_reasonable}</div>
            <div className={secureCellClass} data-weight="secure">{secureCellInfluence}{secure_transmission}</div>
            <div className="app-cell"><a href="#" onClick={this.removeApp.bind(this)}>remove</a></div>
        </div>);
    }
}

export default AppRow;
