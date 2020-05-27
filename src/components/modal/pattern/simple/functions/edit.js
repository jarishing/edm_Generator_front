export async function onBack (){
    return this.props.setModal( false, null, null, null);
}

export async function onConfirm(){
    this.props.functions.onConfirm();
    return this.props.setModal( false, null, null, null);
}