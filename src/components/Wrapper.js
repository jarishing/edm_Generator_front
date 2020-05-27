import React from 'react';
import { connect } from 'react-redux';
import Modal from './modal/modal';
import Drawer from './drawer/drawer';
import Main from '../main/main';

class Wrapper extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
        

    };

    async componentWillMount(){
    };

    async componentDidUpdate(prevProps, prevState){
    }

    render(){

        return (
            <div>
                <Modal/>
                <Drawer/>
                <Main/>
            </div>
        );
    };
};

const mapStateToProps = ( state, ownProps ) => {
    return ({
    });
}
const mapDispatchToProps = ( dispatch, ownProps ) => ({
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);