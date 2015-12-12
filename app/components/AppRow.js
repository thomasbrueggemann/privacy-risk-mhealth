import React from "react";

class AppRow extends React.Component {

    // RENDER
    render() {
        return (<div className="app">
            <div className="app-cell">{this.props.app.name}</div>
            <div className="app-cell"><a href="#">iTunes AppStore</a></div>
            <div className="app-cell">{this.props.app.privacy_index}</div>
            <div className="app-cell">Test</div>
            <div className="app-cell"><i className="fa fa-check fa-lg"></i></div>
            <div className="app-cell">Test</div>
            <div className="app-cell"><i className="fa fa-check fa-lg"></i></div>
            <div className="app-cell"><i className="fa fa-check fa-lg"></i></div>
            <div className="app-cell">Test</div>
            <div className="app-cell">Test</div>
        </div>);
    }
}

export default AppRow;
