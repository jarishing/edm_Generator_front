import React from 'react';
import Item from './direct.item';
import '../../input.css';

export default props => {
    // let content = props.content.find( item => item.lang === props.lang).data;
    // onchange ( value, key, subkey, index ) 

    // sign:{
    //     type:'direct',
    //     name:{ name:"Ivan Diaz C.", title:"Senior Consultant"},
    //     data:[
            // { type:'text', title:"T", content:"+86 21 2426 6525" },
            // { type:'email', title:"E", content:"ivan.diaz@pacificprime.com"},
            // { type:'link', title:"W", content:"hot porn", linkto:"www.google.com"},
            // { type:'text', title:"", content:"" },
            // { type:'text', title:"", content:"" },
            // { type:'text', title:"", content:"" }
    //     ]
    // }

    return (
        <div className="direct">
            <div className="direct-row">
                <div className="direct-row-Name">
                    Name:
                    <input 
                        value={props.sign.name.name}
                        onChange={  event => props.function.onchange(event.target.value, 'sign.name.name') }
                    />
                </div>
                <div className="direct-row-Name">
                    Title:
                    <input 
                        value={props.sign.name.title}
                        onChange={  event => props.function.onchange(event.target.value, 'sign.name.title') }
                    />
                </div>
                <div className="direct-row-button" onClick={() => props.function.addValue( { type:'text', title:"", content:"", linkto:"" }, 'sign.data', props.sign.data.length)}>+</div>
                <div className="direct-row-button" onClick={() => props.function.delValue( 'sign.data', props.sign.data.length - 1)}>-</div>
            </div>
            <div className="direct-row" style={{justifyContent:'space-between'}}>
                <div className="direct-list">
                    {
                        props.sign.data.map((item,index) => (
                            <div className="direct-row" key={index}>
                                <Item 
                                    data={item}
                                    index={index}
                                    function={props.function}
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
                                    <span style={{color:'#1D91D0', fontSize:'14pt', fontWeight:'bold'}}>{props.sign.name.name}</span><br></br>{props.sign.name.title !== "" && `${props.sign.name.title} - Pacific Prime`}
                                </td>
                            </tr>
                            {
                                props.sign.data.map((item,index) => (
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
    )
}

                    // <tr>
                    //     <td style={{textAlign:'left',padding:'3px 5px 0px 10px', fontSize:'9pt'}}><span style={{display:'inline-block', width:'22px', color:'#1D91D0', fontWeight:'bold'}}>T</span>+86 21 2426 6525</td>
                    // </tr>

// <div className="direct-row">
//                         <Item/>
//                     </div>
                    // <div className="direct-row">
                    //     <Item/>
                    // </div>
//                     <div className="direct-row">
//                         <Item/>
//                     </div>
//                     <div className="direct-row">
//                         <Item/>
//                     </div>
//                     <div className="direct-row">
//                         <Item/>
//                     </div>
//                     <div className="direct-row">
//                         <Item/>
//                     </div>