import React from 'react';
import '../../../input.css';

export default props => {
    return (
        <table style={{borderCollapse:'collapse',color:'#777'}}>
            <tbody>
                <tr>
                    <td style={{padding:'10px 10px 30px 5px',fontSize:'11pt', minWidth:'350px'}}>
                        <span style={{color:'#1D91D0', fontSize:'14pt', fontWeight:'bold'}}>{props.data.name.name}</span><br></br>{`${props.data.name.title} - Pacific Prime`}
                    </td>
                </tr>
                {
                    props.data.data.map((item,index) => (
                    item &&
                    <tr key={index}>
                        <td style={{textAlign:'left',padding:'3px 5px 0px 10px', fontSize:'9pt'}}>
                            <span style={{display:'inline-block', width:'22px', color:'#1D91D0', fontWeight:'bold'}}>{item.title}</span>
                                {
                                    item.type == 'text'?
                                        item.content:
                                    item.type == 'email'?
                                        <a style={{color:'#1D91D0'}} href={`mailto:${item.content}`}>{item.content}</a>:
                                        <a style={{color:'#1D91D0', textDecoration:'unset'}} href={`https://${item.linkto}`} target={"_blank"}>{item.content}</a>
                                }
                        </td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    )
}