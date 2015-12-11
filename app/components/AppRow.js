import React from "react";

class Home extends React.Component {

    // RENDER
    render() {
        return (<div className="app">
            <div className="app-cell">{this.prop.app.name}</div>
            <div className="app-cell"><a href="#">iTunes AppStore</a></div>
            <div className="app-cell">91%</div>
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
