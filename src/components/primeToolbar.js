import React, { Component } from 'react';
import {Toolbar} from 'primereact/components/toolbar/Toolbar';
import {Button} from 'primereact/components/button/Button';

class PrimeToolbar extends Component {
    render() {
        return (
            <Toolbar>
            <div className="ui-toolbar-group-left">
                <Button label="New" icon="fa-plus"/>
                <Button label="Open" icon="fa-folder-open" className="ui-button-success"/>
                <i className="fa fa-bars"></i>
                <Button label="Save" icon="fa-check" className="ui-button-warning"/>
            </div>
            <div className="ui-toolbar-group-right">
                <Button icon="fa-search"/>
                <i className="fa fa-bars"></i>
                <Button icon="fa-refresh"/>
                <Button icon="fa-trash" className="ui-button-danger"/>
            </div>
        </Toolbar>
        );
    }
 
  }
  export default PrimeToolbar;