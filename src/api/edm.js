import axios from 'axios';
import url from './url';

export const get = async ( index, keyword ) => {
    let { data: result } = await axios.get(
        `${url}/api/edm?index=${index}&keyword=${keyword}`
    )

    return result;
}

export const post = async ( data ) => {
    try{
        let { data: result } = await axios.post(
            `${url}/api/edm/`, data
        )
        return result;
    }catch ( error ){
        window.alert(error.response.data.error.message);
    }
}

export const update = async ( id, data ) => {
    try{
        let { data: result } = await axios.patch(
            `${url}/api/edm/${id}`, data
        )
        return result;
    }catch ( error ){
        window.alert(error.response.data.error.message);
    }
}

export const del = async ( id ) => {
    try{
        let { data: result } = await axios.delete(
            `${url}/api/edm/${id}`
        )
        return result;
    }catch ( error ){
        window.alert(error.response.data.error.message);
    }
}