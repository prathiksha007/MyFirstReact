import React, { Component } from 'react';

class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.defaultValue };
        this.selectValue = this.selectValue.bind(this);
    }
    selectValue(event) {
        console.log(this.state);
        this.setState({ value: event.target.value });
    }
    render() {
        return (<div>
            <label >{this.props.label}</label>
            <select name={this.props.name} onChange={this.selectValue} value={this.state.value}>   {this.props.options}</select>
        </div>)

    }

}
export default SelectBox;