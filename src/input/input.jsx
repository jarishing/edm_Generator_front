import React from 'react';
import View from './input.view';
import * as functions from './input.model';

class Input extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            list:null
        };
        
        this.functions = {};

        Object.keys(functions).forEach(key => {
            this.functions[key] = functions[key].bind(this);
        })

    };



    render(){
        return (
            <View 
                { ... this.functions }
                { ... this.props }
                { ... this.state }
            />
        );
    };
};

export default Input;