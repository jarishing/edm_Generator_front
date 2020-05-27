import React from 'react';
import View from './main.view';
import * as functions from './main.model';
import { connect } from 'react-redux';
import * as drawerReducer from '../reducers/drawer/action';


class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            lang: "english",
            langList:["english"],
            langInput: "",
            content:[
                {lang: "english", data:"this is eng"}
            ],
            modal: "direct",
            modalList:[
                "direct",
                "list"
            ],
            sign:{
                type:'direct',
                name:{ name:"", title:""},
                data:[
                    { type:'text', title:"", content:"", linkto:"" }
                    // { type:'text', title:"H", content:"hamesome boy", linkto:"" },
                    // { type:'email', title:"E", content:"jarishing@gmail.com", linkto:"" },
                    // { type:'text', title:"T", content:"67677836", linkto:"" },
                    // { type:'link', title:"L", content:"google.com", linkto:"https://google.com" }
                ]
                // type:'list',
                // data:[]
            }
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

const mapStateToProps = ( state, ownProps ) => {
    return ({
    });
  }
  
  const mapDispatchToProps = ( dispatch, ownProps ) => ({
      setDrawer: ( show, pattern, data, functions ) => dispatch( drawerReducer.setDrawer( show, pattern, data, functions ))
  }); 

export default connect(mapStateToProps, mapDispatchToProps)(Main);

// <View 
//                 { ... this.functions }
//                 { ... this.props }
//                 { ... this.state }
//             />


// genResult: "fucking popo \npk"

// { type:"sign", title: "T", content:"", contentType: "normal", addition: 'local1', link:""},
// { type:"sign", title: "D", content:"", contentType: "normal", addition: 'local2', link:""},
// { type:"sign", title: "F", content:"", contentType: "normal", addition: null, link:"" },
// { type:"sign", title: "E", content:"", contentType: "email", addition: 'terms', link:""},


// name: { type:"name", name: "", title: ""},
// sign:[
//     { type:"sign", title: "T", content:"", contentType: "normal", addition: 'local1', link:""}
// ]