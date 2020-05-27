import React from 'react';
import From from './form/form';
import Edit from './edit/edit';
import * as functions from './list.model';
import { connect } from 'react-redux';
import * as modalReducer from '../../../reducers/modal/action';
import '../../input.css';

class List extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            index: 0,
            keyword: '',
            list: null,
            preview: null,
            last: false,
            edit: null
        };
        
        this.functions = {};

        Object.keys(functions).forEach(key => {
           this.functions[key] = functions[key].bind(this);
        })

    };

    async componentWillMount(){
        this.functions.onGetList(0);
    };

    async componentDidUpdate(prevProps, prevState){
        if( !this.state.edit && prevState.edit !== this.state.edit )
            this.functions.onGetList(0);
    }

    render(){

        return (
            <div>
                {
                    this.state.edit ?
                    <Edit
                        { ... this.functions }
                        { ... this.props }
                        { ... this.state }
                    />:
                    <From
                        { ... this.functions }
                        { ... this.props }
                        { ... this.state }
                    />
                }
            </div>
        );
    };
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

export default connect(mapStateToProps, mapDispatchToProps)(List);

// <Edit
//                     { ... this.functions }
//                     { ... this.props }
//                     { ... this.state }
//                 />

// <From
//                     { ... this.functions }
//                     { ... this.props }
//                     { ... this.state }
//                 />

// <div className="list">
// <div className="list-content">
//     <div className="list-search" style={{ color: '#1D91D0', fontWeight: 600}}>
//         <div onClick={() => console.log(this.state)}>Search:</div>
//         <input
//             onChange={
//                 event =>
//                 this.functions.onChange( event.target.value, 'keyword' )
//             }
//         />
//         <div className="list-button" onClick={() => this.functions.onGetList(this.state.index)}>Search</div> 
//     </div>
//     <div style={{display:'flex'}}>
//         <div style={{width: '780px'}}>
//             <div className="list-title-wrapper">
//                 <div className="list-title">
//                     Name
//                 </div>
//                 <div className="list-title">
//                     Title
//                 </div>
//             </div>
//             <div 
//                 className="list-nameList"
//                 onScroll={ e => {
//                     const bottom = e.target.scrollHeight - e.target.scrollTop <= parseInt(e.target.clientHeight) ;
//                     if ( bottom )
//                         this.functions.onScroll();
//                 }}
//             >
//                 {
//                     this.state.list &&
//                     <div>
//                         {
//                             this.state.list.map((item, index) => (
//                                 <Item 
//                                     key={index}
//                                     selected={this.state.preview ? this.state.preview.id:null}
//                                     data={item}
//                                     function={PropsFunction}
//                                 />
//                             ))
//                         }
//                         {
//                             !this.state.last &&
//                             <div className="list-Loading">
//                                 <Icon type="loading-3-quarters" />
//                             </div>
//                         }
//                     </div>
//                 }
//             </div>
//         </div>
//         <div className="list-preview">
//             <div className="list-preview-title">preview</div>
//             {
//                 this.state.preview &&
//                 <Preview data={this.state.preview}/>
//             }
//         </div>                        
//     </div>
// </div>
// </div>