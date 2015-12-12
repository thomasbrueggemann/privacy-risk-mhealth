import React from "react";
import AutoCompleteItem from "./AutoCompleteItem";

class AutoComplete extends React.Component {

    // RENDER
    render() {

        return (
            <ul className="autocomplete-list">
                {this.props.apps.map(a => (
                    <AutoCompleteItem key={a.id} app={a} addNewApp={this.props.addNewApp} />
                ))}
            </ul>
        );
    }
}

export default AutoComplete;
