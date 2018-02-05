import  React, {Component}  from 'react';
import SelectBox from './SelectBox';
import Button from './Button';
import helper from '../helpers/helper.js';


class Form extends Component{


    // constructor(){
    //     super();
    //     // this.getcountryCodesList = this.getcountryCodesList.bind(this);
    // }

    render (){
       
    
        return(<div >

            <form action="http://localhost:3001/getData" >
            <SelectBox name="input" defaultValue="AF" label="Country Code :" options={helper.getCountryCodes()}/>
            <Button name="button" />    
            </form>
        </div>)
          
    }
        
    
}

export default Form;