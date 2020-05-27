export async function add () {
    return value => {
        console.log('add');
    };
}

export async function print () {
    return value => {
        console.log('print');
    };
}