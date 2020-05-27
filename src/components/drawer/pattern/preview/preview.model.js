import api from '../../../../api';
import objectPath from 'object-path';

// export async function DataUpdata( result, dataPath, value ){
//     objectPath.set(result, dataPath, value);
//     return result;
// }

export async function onLeft(){
    let result = {...this.state};
    result.index = result.index - 1;
    if( result.index == 0 )
        result.index = result.sign.length;
    this.setState(result);
}

export async function onRight(){
    let result = {...this.state};
    result.index = result.index + 1;
    if( result.index == result.sign.length + 1)
        result.index = 1;
    this.setState(result);
}

export async function onInit (){
    let result = {...this.state};
    result.content = this.props.data.content.data;
    let temp = [];
    let signContent = null;

    if( this.props.data.sign.type == 'direct'){
        result.sign = {
            data:[{
                name: JSON.parse(JSON.stringify(this.props.data.sign.name)),
                data: JSON.parse(JSON.stringify(this.props.data.sign.data))
            }]
        }
    }

    if( this.props.data.sign.type == 'list'){
        let data = await api.edm.post( this.props.data.sign.data );
        result.sign = data;
    }

    for( let sign of result.sign.data ){

        if( sign.data.length < 6 ){
            let emptyrow = 6 - sign.data.length;

            for( let i = 0; i < emptyrow; i++ ){
                sign.data.push({
                    type: 'empty', title: null, content: null, linkto: null
                });
            }
        }

        signContent ="<table style='border-collapse:collapse;color:#777'>\n";
        signContent +="<tr>\n<td width='350' style='border-right:1px solid #1D91D0;padding: 10px 10px 30px 5px;font-size:11pt;min-width:350px;'><span style='color:#1D91D0;font-size:14pt;font-weight:bold;'>"+sign.name.name+"</span><br>"+sign.name.title+" – Pacific Prime</td>\n<td width='350' style='padding:5px 10px 30px 10px;font-size:24pt'><span style='color:#1D91D0;'><u>Simplifying</u> </span><u>Insurance</u></td>\n</tr>\n";
        
        sign.data.forEach((item, index ) => {
            if( item.type == 'text' ){
                signContent += "<tr>\n<td style='text-align:left;border-right:1px solid #1D91D0;padding:3px 5px 0px 10px;font-size:9pt;'><span style='display: inline-block; width: 22px;color:#1D91D0;font-weight:bold;'>"+item.title+"</span>"+item.content+"</td>\n";
            }else if( item.type == "email" ){
                signContent +=  "<tr>\n<td style='text-align:left;border-right:1px solid #1D91D0;padding:3px 5px 0px 10px;font-size:9pt;'><span style='display: inline-block; width: 22px;color:#1D91D0;font-weight:bold;'>"+item.title+"</span><a style='color:#1D91D0;' href='mailto:"+item.content+"'>"+item.content+"</a></td>\n";
            }else if( item.type == "link" ){
                signContent += "<tr>\n<td style='text-align:left;border-right:1px solid #1D91D0;padding:3px 5px 0px 10px;font-size:9pt;'><span style='display: inline-block; width: 22px;color:#1D91D0;font-weight:bold;'>"+item.title+"</span><a style='color:#1D91D0;' href='https://"+item.linkto+"' target='_blank'>"+item.content+"</a></td>\n";
            }else{
                signContent += "<tr>\n<td style='text-align:left;border-right:1px solid #1D91D0;padding:3px 5px 0px 10px;font-size:9pt;'><span style='display: inline-block; width: 22px;color:#1D91D0;font-weight:bold;'></span></td>\n";
            }

            if( index == 0 ){
                signContent += "<td style='padding:3px 5px 0px 10px;font-size:9pt;'>Hong Kong • Shanghai • Beijing • Singapore</td>\n</tr>\n";
            }else if( index == 1 ){
                signContent += "<td style='padding:3px 5px 0px 10px;font-size:9pt;'>Dubai • Bangkok • London • Los Angeles • Mexico City</td>\n</tr>\n";
            }else if( index == 3 ){
                signContent += "<td rowspan='3' style='padding:3px 15px 0px 10px;font-size:6pt;'><div style='width:330px'>The information transmitted is intended only for the person or entity to which it is addressed and may contain confidential and/or privileged material. Any review, retransmission, dissemination or other use of, or taking of any action in reliance upon, this information by persons or entities other than the intended recipient is prohibited. For full terms and conditions of working with Pacific Prime please refer to our website <a  style='text-decoration:none;color:#1D91D0;color:#777;' href='https://www.pacificprime.com/pp-profile/terms-and-conditions/'>terms and conditions</a></div></td>\n</tr>\n";
            }else{
                signContent += "<td style='padding:3px 5px 0px 10px;font-size:9pt;'>&nbsp;</td>\n</tr>\n";
            }
        });

        signContent +="</table>\n<br>";

        temp.push(signContent);
    }

    result.sign = temp;
    this.setState(result);
}


// if( item.type == 'text' ){
//     signContent += "<tr>\n<td style='text-align:left;border-right:1px solid #1D91D0;padding:3px 5px 0px 10px;font-size:9pt;'><span style='display: inline-block; width: 22px;color:#1D91D0;font-weight:bold;'>"+item.title+"</span>"+item.content+"</td>\n";
// }else if( item.type == "email" ){
//     signContent +=  "<tr>\n<td style='text-align:left;border-right:1px solid #1D91D0;padding:3px 5px 0px 10px;font-size:9pt;'><span style='display: inline-block; width: 22px;color:#1D91D0;font-weight:bold;'>"+item.title+"</span><a style='color:#1D91D0;' href='mailto:"+item.content+"'>"+item.content+"</a></td>\n";
// }else if( item.type == "link" ){
//     signContent += "<tr>\n<td style='text-align:left;border-right:1px solid #1D91D0;padding:3px 5px 0px 10px;font-size:9pt;'><span style='display: inline-block; width: 22px;color:#1D91D0;font-weight:bold;'>"+item.title+"</span><a style='color:#1D91D0;' href='https://"+item.linkto+"' target='_blank'>"+item.content+"</a></td>\n";
// }else{
//     signContent += "<tr>\n<td style='text-align:left;border-right:1px solid #1D91D0;padding:3px 5px 0px 10px;font-size:9pt;'><span style='display: inline-block; width: 22px;color:#1D91D0;font-weight:bold;'></span></td>\n";
// }

// if( index == 0 ){
//     signContent += "<td style='padding:3px 5px 0px 10px;font-size:9pt;'>Hong Kong • Shanghai • Beijing • Singapore</td>\n</tr>\n";
// }else if( index == 1 ){
//     signContent += "<td style='padding:3px 5px 0px 10px;font-size:9pt;'>Dubai • Bangkok • London • Los Angeles • Mexico City</td>\n</tr>\n";
// }else if( index == 3 ){
//     signContent += "<td rowspan='3' style='padding:3px 15px 0px 10px;font-size:6pt;'><div style='width:330px'>The information transmitted is intended only for the person or entity to which it is addressed and may contain confidential and/or privileged material. Any review, retransmission, dissemination or other use of, or taking of any action in reliance upon, this information by persons or entities other than the intended recipient is prohibited. For full terms and conditions of working with Pacific Prime please refer to our website <a  style='text-decoration:none;color:#1D91D0;color:#777;' href='https://www.pacificprime.com/pp-profile/terms-and-conditions/'>terms and conditions</a></div></td>\n</tr>\n";
// }else{
//     signContent += "<td style='padding:3px 5px 0px 10px;font-size:9pt;'>&nbsp;</td>\n</tr>\n";
// }