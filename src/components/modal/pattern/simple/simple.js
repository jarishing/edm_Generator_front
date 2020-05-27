import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import * as modalReducer from '../../../../reducers/modal/action';
import Title from './simple.title';
import Content from './simple.content';
import Functions from './functions/index';
import './simple.css';


class Simple extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };

        this.functions = {};

        Object.keys(Functions[this.props.pattern]).forEach(key => {
           this.functions[key] = Functions[this.props.pattern][key].bind(this);
        })
    };

    render(){

        return(
            <div className="modal-simple">
                <div className="modal-simple-title-list">
                    <p>
                        {Title[this.props.pattern]}
                    </p>
                    <ClearIcon
                        onClick={() => this.props.setModal( false, null, null, null)}
                    />
                </div>
                <div className="modal-simple-content">
                    <p>{Content[this.props.pattern]}</p>
                </div>
                <div className="modal-simple-button-list">
                    <div className="modal-button"
                        onClick={() => this.functions.onBack()}
                    >
                        Back
                    </div>
                    <div className="modal-button"
                        onClick={() => this.functions.onConfirm()}
                    >
                        Confirm
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = ( state, ownProps ) => {
    return ({
        pattern : state.modalReducer.pattern,
        data  : state.modalReducer.data,
        functions : state.modalReducer.functions
    });
  }
  
  const mapDispatchToProps = ( dispatch, ownProps ) => ({
    setModal: ( show, pattern, data, functions ) => dispatch( modalReducer.setModal( show, pattern, data, functions ))
  }); 
  
  export default connect(mapStateToProps, mapDispatchToProps)(Simple);