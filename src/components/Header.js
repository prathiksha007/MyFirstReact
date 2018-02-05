import React, {Component}  from 'react';
import logo from '../assets/logo.png';

const headerStyle = {
    align:"left",
    position:"relative",
    display: "flex"
}
const logoStyle ={
    width: "120px",
    height:"120px",
    margin: "10px"
}
const title ={
    fontStyle : "italic",
    position: "relative",
    verticalAlign: "bottom"
}

class Header extends Component{

    render(){
        return (<div>
            <header style={headerStyle}>
                <img src={logo} style={logoStyle} alt='Logo'/>
                <h2 className='title' style={title} >CountryCodes</h2>
                </header>
        </div>)
    }
}
export default Header;