import axios from 'axios';
import objectPath from 'object-path';
import api from '../api';

//general

export async function onContentEdit (value){
    const result = {...this.state};
    result.content.find( item => item.lang === result.lang).data = value;
    this.setState(result);
}

export async function DataUpdata( result, dataPath, value ){
    objectPath.set(result, dataPath, value);
    return result;
}

export async function onchange ( value, dataPath ) {
    let result = {...this.state};
    objectPath.set(result, dataPath, value);
    return this.setState(result);
}

//specific

export async function onTypeChange ( value, index ) {
    let result = {...this.state};
    result.sign.data[index].type = value;
    if(value !== 'link')
        result.sign.data[index].linkto = null;
    return this.setState(result);
}

// sign.data.${props.index}.type

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

export async function addLang (){
    const result = {...this.state};
    result.langList.push( result.langInput );
    result.content.push({lang: result.langInput, data: ""});
    result.langInput = "";
    return this.setState(result);
}

export async function onSignModeChange ( sign, modal ){
    let result = {...this.state};
    result = await DataUpdata( result, `sign`, sign);
    result = await DataUpdata( result, `modal`, modal);
    return this.setState(result);
}

export async function onListSelect ( value ){
    let result = {...this.state};

    if( result.sign.type !== 'list' )
        return;
    
    let index = result.sign.data.findIndex( element => element == value );

    if( index > -1 )
        objectPath.del(result, `sign.data.${index}`);
    else
        objectPath.insert(result, `sign.data`, value);

    return this.setState(result);
}

export async function print () {
    const result = {...this.state};

    if( result.title == "" )
        return window.alert('Please enter the title');
    if( result.content.find( item => item.lang === result.lang) == null)
        return window.alert('Please enter the content');
    if( result.sign.type == 'direct' && result.sign.name.name == "" && result.sign.name.title == "")
        return window.alert('Please enter the name and title');
    
    if( result.modal === "direct" )
        printDirect(result);
    else
        printList(result);
}

export async function printList( result ){
    let data = {
        content: result.content.find( item => item.lang === result.lang),
        data: result.sign.data
    }

    axios({
        method: 'post',
        url: 'http://localhost:3100/api/edm/list',
        responseType: 'blob',
        data: data
    }).then((response) => {
        console.log(response);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${result.title} - ${result.lang}.zip`); //or any other extension
        document.body.appendChild(link);
        link.click();
    });
}

export async function printDirect( result ) {
    let sign = [];
    result.sign.name.name = result.sign.name.name.trim();

    await result.sign.data.forEach( element => {
        sign.push({
            type: element.type, 
            title: element.title,
            content: element.content,
            linkto: element.type !== 'link'? null:element.linkto
        })
    });

    result.sign.data = sign;

    let data={
        content: result.content.find( item => item.lang === result.lang),
        name: result.name,
        sign: result.sign
     };

    axios({
        method: 'post',
        url: 'http://localhost:3100/api/edm/direct',
        responseType: 'blob',
        data: data
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${result.title} - ${result.sign.name.name} - ${result.lang}.html`); //or any other extension
        document.body.appendChild(link);
        link.click();
    });
}

// result.sign.data.forEach( element => {
//     sign.push({
//         type: element.type, 
//         title: element.title,
//         content: element.content,
//         linkto: element.type !== 'link'? null:element.linkto
//     })
// });


// New Microsite Procedure (Multi-user)
// 1. Duplicate Context
// 2. Update Gateway Plugin
// 3. Create New User (Username, Email, Active need to be checked, Password)
// 4. Create New User Group in ACL (Name, Create Parallel Resource Group need to be checked, Users fill the username in step3, Contexts fill the name in step 1)
// 5. Replace Step3 and Step4 for additional user
// 6. Create New User Group (Name only, Contexts empty) as parent group (Skip this step if a user group only)
// 7. Update User Groups created on Step 4 and update below:
//    - General Information Tab, Parent Group fill the name in step 6 (Skip it if no parent group)
//    - Permission Tab, Context Access Tab, update Access Policy to Load List View on item with context name fill in step 1
//    - Permission Tab, Resource Group Access Tab, update Access Policy to Load List View on item with resource group name in step 4
// 8  Update Login page on the content
//    - [[!Login? &contexts=`<Context Name in Step 1> ,web` &loginResourceId=`<Microsite Login Document Id>` &loginTpl=`lvmh-loginTpl`]]
//    - [[!isLoginRedirect? &rID=`<Microsite Home Document Id>`]]
// 9. Updated Context created in step 1, the Context Setting below:
//    - custom-js : The value(HTML Code) will be insert before </body>
//    - error_page : Login Document Id
//    - hiddenUsername : Prefill username
//    - login_rid : Login Document Id
//    - site_start : Home Document Id
//    - site_url : https://xxx.pacificprime.com/ 
//    - sub-domain-logo : /assets/sub-domain/xxx/logo.png
//    - subDomainShowLogin : if 1, logout will not display

// Claim submission form
// 1. Duplicate Chunk
//    TTS_Claim_COMMON (Change Doc Id)
//    TTS_Claim_EMAIL (Change Doc Id)
//    TTS_Claim_FORM (Change Chunk Name and Doc Id)
//    TTS_Clam_ISO4217
// 2. Duplicate JS claimform/form.js
