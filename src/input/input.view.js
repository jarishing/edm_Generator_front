import React from 'react';
import './input.css';

import Direct from './item/direct/direct';
import List from './item/list/list';

export default props => {
    // let content = props.content.find( item => item.lang === props.lang).data;

    let propsFunction = {
        onchange: props.function.onchange,
        onListSelect: props.function.onListSelect,
        onTypeChange: props.function.onTypeChange,
        addValue: props.function.addValue,
        delValue: props.function.delValue
    }

    let modalDefaulltData ={
        direct: {
            type:'direct',
            name:{ name:"", title:""},
            data:[
                { type:'text', title:"", content:"",linkto:"" }
            ]
        },
        list: {
            type:'list',
            data:[]
        }
    }

    return (
        <div style={{marginTop:'40px'}}>
            <div style={{display:'flex', position:'absolute'}}>
                {
                    props.data.modalList.map((item,index) => (
                        <div
                            key={index}
                            style={{marginLeft: index == 0? '0px':'15px'}}
                            className={props.data.modal == item?"modalList-button-selected":"modalList-button"}
                            onClick={() => (
                                    //not work
                                    props.function.onSignModeChange( modalDefaulltData[item], item )
                                    // props.function.onchange( modalDefaulltData[item],`sign`),
                                    // props.function.onchange( item,`modal`)
                                )
                            }
                        >{item}</div>
                    ))
                }
            </div>
            <div className="modalList-content">
                {
                    props.data.modal == 'direct'?
                    <Direct 
                        sign={props.data.sign}
                        function={propsFunction}
                    />:
                    <List
                       sign={props.data.sign}
                       function={propsFunction}
                    />
                }
            </div>
        </div>
    )
}
