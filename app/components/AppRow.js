import React from "react";

class AppRow extends React.Component {

    // REMOVE APP
    removeApp() {
        this.props.removeApp(this.props.app);
    }

    // RENDER
    render() {

        var secure_transmission = "-", data_reasonable = "-";
        if(this.props.app.personal_target.length > 0) {
            secure_transmission = (this.props.app.secure_transmission === true) ? <i className="fa fa-check fa-lg"></i> : <i className="fa fa-times fa-lg"></i>;
            data_reasonable = (this.props.app.data_reasonable === true) ? <i className="fa fa-check fa-lg"></i> : <i className="fa fa-times fa-lg"></i>;
        }

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

        // determine idx color
        var idx_class = "idx";
        if(this.props.app.privacy_index <= 18) {
            idx_class += " idx_green";
        }
        else if(this.props.app.privacy_index > 18 && this.props.app.privacy_index <= 35) {
            idx_class += " idx_orange";
        }
        else {
            idx_class += " idx_red";
        }

        return (<div className="app">
            <div className="app-cell">{this.props.app.name}</div>
            <div className="app-cell">{store_icon}<a href={store_url} target="_blank">{store_name}</a></div>
            <div className="app-cell"><span className={idx_class}>{this.props.app.privacy_index}</span></div>
            <div className="app-cell">{(this.props.app.personal_category.length > 0) ? this.props.app.personal_category.join(", ") : "none"}</div>
            <div className="app-cell">
                {(this.props.app.login === true) ? <i className="fa fa-check fa-lg"></i> : <i className="fa fa-times fa-lg"></i>}
            </div>
            <div className="app-cell">{(this.props.app.personal_target.length > 0) ? this.props.app.personal_target.join(", ") : "nowhere"}</div>
            <div className="app-cell">{(this.props.app.unspecific_target.length > 0) ? this.props.app.unspecific_target.join(", ") : "no"}</div>
            <div className="app-cell">{data_reasonable}</div>
            <div className="app-cell">{secure_transmission}</div>
            <div className="app-cell"><a href="#" onClick={this.removeApp.bind(this)}>remove</a></div>
        </div>);
    }
}

export default AppRow;
