import React, {Component} from 'react';


class TextBox extends Component{
    constructor(props){
     super(props);
     this.state = {value: this.props.defaultValue}
    this.setValue = this.setValue.bind(this);   
    }
    setValue(event) {
       this.setState({value : event.target.value})
    }
    render(){
         return (<div>
        <label label={this.props.label} />     
        <input name={this.props.name} onChange={this.setValue} value={this.state.value}  /></div>)
    }
}
export default TextBox;