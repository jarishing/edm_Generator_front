export async function onContentChange (value){
    const result = {...this.state};
    result.content.find( item => item.lang === result.lang).data = value;
    this.setState(result);
}

export async function changeModal (value){
    
}