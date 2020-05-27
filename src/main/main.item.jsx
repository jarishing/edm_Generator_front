import React from 'react';

export default props => {
    return (
        <div style={{display:'flex', marginBottom: '20px'}}>
            <div>title: 
                <input 
                    style={{margin: '0 10px'}}
                    onChange={ event => 
                            props.onchange(
                                event.target.value,
                                props.type == "sign"? 'sign':'name',
                                props.type == "sign"? 'title':'name',
                                props.type == "sign"? props.index:null
                            )
                        }
                    value={props.title}
                />
                </div>
            <div style={{padding: '0 10px'}}>content: 
                <input 
                    style={{width: '300px', margin: '0 10px'}}
                    onChange={ event => 
                            props.onchange(
                                event.target.value,
                                props.type == "sign"? 'sign':'name',
                                props.type == "sign"? 'content':'title',
                                props.type == "sign"? props.index:null
                            )
                        }
                    value={props.content}
                />
            </div>
            {
                !!props.contentType && props.contentType == "link" &&
                <div style={{padding: '0 10px'}}>link: 
                    <input 
                        style={{width: '300px', margin: '0 10px'}}
                        onChange={ event => 
                                props.onchange(
                                    event.target.value,
                                    props.type == "sign"? 'sign':'name',
                                    props.type == "sign"? 'link':'title',
                                    props.type == "sign"? props.index:null
                                )
                            }
                        value={props.link}
                    />
                </div>
            }
        </div>
    )
}

// onChange={() => onchange()}

// type:"sign",