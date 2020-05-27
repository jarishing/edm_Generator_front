import React from 'react';

import Preview from './preview/preview';

const Pattern = {
    Preview : Preview
}

class Switch extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
    };

    render(){
        
        let Handler = Pattern['Preview'];

        return(
            <div style={{height:'100%'}}>
                <Handler/>
            </div>
        )
    }
};

export default Switch;