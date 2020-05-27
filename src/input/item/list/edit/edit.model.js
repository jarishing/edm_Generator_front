import objectPath from 'object-path';
import api from '../../../../api';

export async function onInit ( value) {
    let result = {...this.state};

    result.id = value.edit.id;
    result.name = value.edit.name;
    value.edit.data.forEach( element => {
        result.data.push(element);
    });
    return this.setState(result);
}

export async function onChange ( value, dataPath ) {
    let result = {...this.state};
    objectPath.set(result, dataPath, value);
    return this.setState(result);
}

export async function addValue ( value, dataPath, index ){
    let result = {...this.state};
    objectPath.insert(result, dataPath, value, index);
    return this.setState(result);
}

export async function delValue ( dataPath, index ){
    let result = {...this.state};
    objectPath.del(result, `${dataPath}.${index}`);
    return this.setState(result);
}

export async function onSave (){
    let result = {...this.state};

    result.name.name = result.name.name.trim();

    //data check
    await result.data.map((item, index) => {
        result.data[index].linkto = item.type !== 'link'?
        null:item.linkto
    });

    let req = {
        name: result.name,
        data: result.data
    };

    let response = await api.edm.update( result.id, req );

    if( response.success )
        return this.props.onChange(null, 'edit');
}