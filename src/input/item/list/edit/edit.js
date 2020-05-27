import React from 'react';
import Item from './item';
import * as functions from './edit.model';
import '../../../input.css';


class Edit extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: null,
            name:{ name:"", title:""},
            data:[]
        };
        
        this.functions = {};

        Object.keys(functions).forEach(key => {
           this.functions[key] = functions[key].bind(this);
        })

    };

    async componentWillMount(){
        this.functions.onInit(this.props);
    };

    render(){

        let ModalFunctions = {
            onConfirm: this.functions.onSave
        }
        
        return (
            <div className="direct">
                <div className="direct-row direct-row-title">
                    <div onClick={() => console.log(this.props)}>Edit:</div>
                    <div style={{display:'flex'}}>
                        <div className="direct-row-title-button" onClick={() => this.props.onChange(null, 'edit')}>Back</div>
                        <div className="direct-row-title-button" onClick={() => this.props.setModal( true, 'Edit', null, ModalFunctions)}>Save</div>
                    </div>
                </div>
                <div className="direct-row">
                    <div className="direct-row-Name">
                        Name:
                        <input 
                            value={this.state.name.name}
                            onChange={  event => this.functions.onChange(event.target.value, 'name.name') }
                        />
                    </div>
                    <div className="direct-row-Name">
                        Title:
                        <input 
                            value={this.state.name.title}
                            onChange={  event => this.functions.onChange(event.target.value, 'name.title') }
                        />
                    </div>
                    <div className="direct-row-button" onClick={() => this.functions.addValue({ type:'text', title:"", content:"", linkto:"" }, 'data', this.state.data.length)}>+</div>
                    <div className="direct-row-button" onClick={() => this.functions.delValue( 'data', this.state.data.length - 1)}>-</div>
                </div>
                <div className="direct-row" style={{justifyContent:'space-between'}}>
                    <div className="direct-list" style={{height: '273px'}}>
                        {
                            this.state.data.map((item,index) => (
                                <div className="direct-row" key={index}>
                                    <Item 
                                        data={item}
                                        index={index}
                                        function={this.functions}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className="direct-preview">
                        <div style={{color:'#1D91D0',fontSize:'14px', fontWeight:'bold'}}>preview:</div>
                        <table style={{borderCollapse:'collapse',color:'#777'}}>
                            <tbody>
                                <tr>
                                    <td style={{padding:'10px 10px 30px 5px',fontSize:'11pt', minWidth:'350px'}}>
                                        <span style={{color:'#1D91D0', fontSize:'14pt', fontWeight:'bold'}}>{
                                            this.state.name.name
                                        }</span><br></br>{
                                            this.state.name.title !== "" && `${this.state.name.title} - Pacific Prime`
                                        }
                                    </td>
                                </tr>
                                {
                                    this.state.data.map((item,index) => (
                                        <tr key={index}>
                                            <td style={{textAlign:'left',padding:'3px 5px 0px 10px', fontSize:'9pt'}}>
                                                <span style={{display:'inline-block', width:'22px', color:'#1D91D0', fontWeight:'bold'}}>{item.title}</span>
                                                {
                                                    item.type == 'text'?
                                                        item.content:
                                                    item.type == 'email'?
                                                        <a style={{color:'#1D91D0'}} href={`mailto:${item.content}`}>{item.content}</a>:
                                                        <a style={{color:'#1D91D0', textDecoration:'unset'}} href={`https://${item.linkto}`} target={"_blank"}>{item.content}</a>
                                                }
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };
};

export default Edit;