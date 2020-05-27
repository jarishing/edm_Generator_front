import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { connect } from 'react-redux';
import Pattern from './pattern/index';
import * as modalReducer from '../../reducers/modal/action';
import './modal.css';

class ModalClass extends React.Component {

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
      return(
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.modal}
          className="model-wrapper"
          onClose={() => this.props.setModal(false, null, null, null)}
        >
          <div>
            <Pattern
              pattern={this.props.pattern}
            />
          </div>
        </Modal>
      )
    }
};

const mapStateToProps = ( state, ownProps ) => {
  return ({
      modal : state.modalReducer.modal,
      pattern : state.modalReducer.pattern
  });
}

const mapDispatchToProps = ( dispatch, ownProps ) => ({
  setModal: ( show, pattern, data, functions ) => dispatch( modalReducer.setModal( show, pattern, data, functions ))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(ModalClass);