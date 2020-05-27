import axios from 'axios';
import objectPath from 'object-path';
import api from '../../../api';

//General

export async function onChange ( value, dataPath ) {
    let result = {...this.state};
    objectPath.set(result, dataPath, value);
    return this.setState(result);
}

export async function DataUpdata( result, dataPath, value ){
    objectPath.set(result, dataPath, value);
    return result;
}

//Specific

export async function onScroll (){
    let result = {...this.state};
    if(result.last)
        return;

    let data = await api.edm.get( result.index + 1, result.keyword );
    result.list = [].concat( result.list, data.data);
    result.last = data.last;
    result.index = result.index + 1;
    return this.setState(result);
}

export async function onGetList( value ){
    let result = {...this.state};
    let data = await api.edm.get( value, result.keyword );
    result = await DataUpdata( result, 'list', data.data);
    result = await DataUpdata( result, 'last', data.last);
    result = await DataUpdata( result, 'index', value);
    return this.setState(result);
}

export async function onEmployeeDelete( id ){
    let result = {...this.state};
    await api.edm.del( id );
    let data = await api.edm.get( 0, result.keyword );
    result = await DataUpdata( result, 'list', data.data);
    result = await DataUpdata( result, 'last', data.last);
    result = await DataUpdata( result, 'index', 0);
    return this.setState(result);
}