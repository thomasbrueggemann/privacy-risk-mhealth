import React from "react";

class AutoCompleteItem extends React.Component {

    // ADD NEW APP
    addNewApp() {
        this.props.addNewApp(this.props.app);
    }

    // RENDER
    render() {

        return (
            <li onClick={this.addNewApp.bind(this)} title={this.props.app.name}>
                {(this.props.app.rater === "thomas") ? <i className="fa fa-apple fa-fw"></i> : <i className="fa fa-android fa-fw"></i>}
                {(this.props.app.name.length > 25) ? this.props.app.name.substring(0, 25) + "..." : this.props.app.name}
            </li>
        );
    }
}

export default AutoCompleteItem;
