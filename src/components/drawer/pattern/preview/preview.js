import React from 'react';
import { connect } from 'react-redux';
import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';
import * as functions from './preview.model';
import './preview.css';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

class Preview extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            content: null,
            sign: null,
            index: 1
        };

        this.functions = {};

        Object.keys(functions).forEach(key => {
            this.functions[key] = functions[key].bind(this);
        })
    };

    async componentWillMount(){
        this.functions.onInit();
    };

    render(){

        return(
            <div className="drawer-wrapper">
                <div className="drawer-button-background">
                    <div className="drawer-button-open" onClick={() =>console.log(this.state)}>
                        <PageviewOutlinedIcon/>
                        <div className="drawer-button-open-title">
                            perview
                        </div>
                    </div>
                </div>
                <div className="drawer-content" style={{width: '847px'}}>
                    {
                        this.state.sign && this.state.sign.length == 0 &&
                        <div className="preview-content-wrapper">
                            <div className="preview-content-empty">
                                You are not select any signature yet.
                            </div>
                        </div>
                    }
                    {
                        this.state.sign && this.state.sign.length != 0 &&
                        <div className="preview-content-wrapper">
                            <div className="previe-title">
                                preview 
                                {
                                    this.state.sign.length != 1 &&
                                    "(" + this.state.index + "/" + this.state.sign.length + ")"
                                }
                            </div>
                            <div className="preview-content">
                                {
                                    this.state.sign.length != 1 && 
                                    <div className="preview-content-button-left" onClick={() => this.functions.onLeft()}>
                                        <ChevronLeftIcon/>
                                    </div>
                                }
                                {
                                    this.state.sign.length != 1 &&
                                    <div className="preview-content-button-right" onClick={() => this.functions.onRight()}>
                                        <ChevronRightIcon/>
                                    </div>
                                }
                                <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
                                <div dangerouslySetInnerHTML={{ __html: this.state.sign[this.state.index - 1] }} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
};

const mapStateToProps = ( state, ownProps ) => {
    return ({
        data  : state.drawerReducer.data,
    });
  }
  
  const mapDispatchToProps = ( dispatch, ownProps ) => ({
  }); 
  
  export default connect(mapStateToProps, mapDispatchToProps)(Preview);