import React from 'react';
import Item from './form.item';
import Preview from './from.preview';
import { Icon } from 'antd';
import Select from 'react-select';
import Modal from '../../../../components/modal/modal';
import '../../../input.css';

export default props => {

    let PropsFunction = {
        onChange: props.onChange,
        onListSelect: props.function.onListSelect,
        setModal: props.setModal,
        onEmployeeDelete: props.onEmployeeDelete
    }

    return (
        <div className="list">
            <div className="list-content">
                <div className="list-search" style={{ color: '#1D91D0', fontWeight: 600}}>
                    <div onClick={() => console.log(props)}>Search:</div>
                        <input
                            onChange={
                                event =>
                                props.onChange( event.target.value, 'keyword' )
                            }
                        />
                        <div 
                            className="list-button" 
                            onClick={() => props.onGetList(0)}
                        >Search</div>
                        <Modal/>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{width: '780px'}}>
                            <div className="list-title-wrapper">
                                <div className="list-title">
                                    Name
                                </div>
                                <div className="list-title">
                                    Title
                                </div>
                            </div>
                            <div 
                                className="list-nameList"
                                onScroll={ e => {
                                    const bottom = e.target.scrollHeight - e.target.scrollTop <= parseInt(e.target.clientHeight) ;
                                    if ( bottom )
                                        props.onScroll();
                                }}
                            >
                                {
                                    props.list &&
                                    <div>
                                        {
                                            props.list.map((item, index) => (
                                                <Item 
                                                    key={index}
                                                    selected={props.preview ? props.preview.id:null}
                                                    data={item}
                                                    printList={props.sign.data}
                                                    function={PropsFunction}
                                                />
                                            ))
                                        }
                                        {
                                            !props.last &&
                                            <div className="list-Loading">
                                                <Icon type="loading-3-quarters" />
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="list-preview">
                            <div className="list-preview-title">preview</div>
                            {
                                props.preview &&
                                <Preview data={props.preview}/>
                            }
                        </div>                        
                    </div>
                </div>
            </div>
    )
}