import React from 'react';
import Select from 'react-select';
import '../../../input.css';

export default props => {
    
    const options = [
        { value: 'text', label:'text'},
        { value: 'email', label:'email'},
        { value: 'link', label:'link'}
    ];

    let optionIndex = options.findIndex( (element) => element.value == props.data.type);

    return (
        <div className="direct-item">
            <Select 
                options={options} 
                value={options[optionIndex]}
                onChange={event => props.function.onChange(event.value, `data.${props.index}.type`)}
            />
            <div className="direct-subitem-title">
                title: 
                <input 
                    value={props.data.title}
                    onChange={ event => props.function.onChange(event.target.value, `data.${props.index}.title`)}
                />
            </div>
            <div className="direct-subitem-normal">
                content: 
                <input 
                    style={{width: props.data.type == 'link'? '180px':'300px'}} 
                    value={props.data.content}
                    onChange={ event => props.function.onChange(event.target.value, `data.${props.index}.content`)}
                />
            </div>
            {
                props.data.type == 'link' &&
                <div className="direct-subitem-normal">
                    linkTo: 
                    <input 
                        style={{width: '180px'}} 
                        value={props.data.linkto}
                        onChange={ event => props.function.onChange(event.target.value, `data.${props.index}.linkto`)}
                    />
                </div>
            }
        </div>
    )
}