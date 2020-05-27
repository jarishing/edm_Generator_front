import React from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import * as drawerReducer from '../../reducers/drawer/action';
import Pattern from './pattern/index';

class DrawerClass extends React.Component {

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
        <Drawer 
            anchor="right" 
            open={this.props.show} 
            onClose={() => this.props.setDrawer( false, null, null, null)}
        >
            <Pattern/>
        </Drawer>
      )
    }
};

const mapStateToProps = ( state, ownProps ) => {
  return ({
    show : state.drawerReducer.show,
    pattern : state.drawerReducer.pattern
  });
}

const mapDispatchToProps = ( dispatch, ownProps ) => ({
    setDrawer: ( show, pattern, data, functions ) => dispatch( drawerReducer.setDrawer( show, pattern, data, functions ))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(DrawerClass);