import React, {Component} from 'react';


class Button extends Component{
    constructor (props){
        super(props);
        this.state = {hits:[]}
     
    }
   
    render() {
       return (<div><button name={this.props.name} >Submit</button></div>)
    }
   }


export default Button;