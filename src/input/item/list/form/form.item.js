import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import '../../../input.css';

export default props => {

    let ModalData = {
        id: props.data.id
    }

    let ModalFunctions = {
        onConfirm: props.function.onEmployeeDelete
    }
    
    return (
        <div className="list-item">
            <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                checked={props.printList.includes(props.data.id)}
                onChange={() => props.function.onListSelect(props.data.id)}
            />
            <div 
                className={props.selected === props.data.id? "item-content blue": "item-content"}
                onClick={
                    () => props.function.onChange(props.data, 'preview')
                }
            >
                <div className="item-column">
                    {props.data.name.name}
                </div>
                <div className="item-column">
                    {props.data.name.title}
                </div>
            </div>
            <div className="item-icon"> 
                <EditOutlinedIcon onClick={() => props.function.onChange(props.data, 'edit')}/>
                <ClearIcon 
                    onClick={() => 
                        props.function.setModal( true, 'Delete', ModalData, ModalFunctions )
                        // props.function.onEmployeeDelete( props.data.id )
                    }
                />
            </div>
        </div>
    )
}