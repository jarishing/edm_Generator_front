import React from 'react';

import Simple from './simple/simple';

const Pattern = {
    Delete : Simple,
    Edit   : Simple
}

class Switch extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            modal: 'Delete'
        };
    };

    render(){
        
        let Handler = Pattern[this.state.modal];

        return(
            <div style={{height: '100%'}}>
                <Handler/>
            </div>
        )
    }
};

export default Switch;