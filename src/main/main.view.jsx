import React from 'react';
import ReactQuill from 'react-quill';
import InputColumn from '../input/input';
import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';
import './main.css';
import 'react-quill/dist/quill.snow.css';

export default props => {
    // let content = props.content.find( item => item.lang === props.lang).data;

    let PropsData = {
        modal: props.modal,
        modalList: props.modalList,
        sign: props.sign
    };

    let PropsFunction = {
        onchange: props.onchange,
        onListSelect: props.onListSelect,
        onTypeChange: props.onTypeChange,
        onSignModeChange: props.onSignModeChange,
        addValue: props.addValue,
        delValue: props.delValue
    };

    let DrawerData = {
        content: props.content.find( item => item.lang === props.lang),
        sign: props.sign
    }

    return (
        <div>
            <div className="drawer-button-List">
                <div className="drawer-button" onClick={() => props.setDrawer( true, 'Preview', DrawerData, null)}>
                    <PageviewOutlinedIcon/>
                    <div className="drawer-button-title">
                        perview
                    </div>
                </div>
            </div>
            <div style={{padding: '20px 50px', width: '1263px', margin: '0 auto'}}>
                <div style={{display:'flex', margin: '20px 0', justifyContent:'center', alignItems:'center'}}>
                    <div style={{color:'#1D91D0', fontWeight: '600'}}>title:</div>
                    <input 
                        style={{marginLeft:'20px', height:'25px', width: '300px', padding: '0 10px'}}
                        onChange={
                            event =>
                            props.onchange( event.target.value, 'title')
                        }
                    />
                </div>
                <div style={{color:'#1D91D0', fontWeight: '600'}}>content:</div>
                    <div style={{display:'flex'}}>
                        <div style={{height:'450px',margin:'10px 0'}}>
                            <ReactQuill 
                                value={props.content.find( item => item.lang === props.lang).data}
                                onChange={props.onContentEdit}
                                style={{width:'1000px',height:'400px'}}
                                modules={{
                                    toolbar:[
                                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                        ['bold', 'italic', 'underline'], 
                                        [{ 'list': 'bullet' },{ 'list': 'ordered' }],
                                        [{ 'script': 'sub'}, { 'script': 'super' }],
                                        [{ 'color': ['#1D91D0', 'red'] }], 
                                        ["link", "image"],
                                        ["code"]
                                    ]
                                }}
                            />
                        </div>
                        <div style={{ height: '300px', width: '200px', marginLeft: '20px'}}>
                            <div style={{display:'flex', width:'240px'}}>
                                <input
                                    style={{height: '36px', marginTop: '11px', border: '1px solid lightgray'}}
                                    onChange={
                                        event =>
                                        props.onchange( event.target.value, 'langInput')
                                    }
                                />
                                <button 
                                    style={{marginLeft:'10px', marginTop: '11px', width: '78px', background: '#fff', border: '1px solid #1D91D0', color: '#1D91D0', cursor:'pointer'}}
                                    onClick={() => props.addLang()}
                                >Add</button>
                            </div>
                            <div style={{ height: '379px',width: '200px', margin: '20px 0', overflowX:'hidden', overflowY:'auto', padding:'0 20px', border: '1px lightgray solid'}}>
                                {
                                    props.langList.map((item, index) => (
                                        <div>
                                            <div
                                                key={index}
                                                className={props.lang == item? "langButton selected":"langButton non-selected"}
                                                onClick={() => props.onchange( item, 'lang' )}
                                            >{item}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                <InputColumn
                    data={PropsData}
                    function={PropsFunction}
                />
                <div className="main-print-button" onClick={() => props.print()}>PRINT</div>
            </div>
        </div>
    )
}


// <SunEditor
//                         setOptions={{
                            // width: 800,
                            // height: 400,
//                             buttonList: [
//                                 ['undo', 'redo'],
//                                 ['font', 'fontSize', 'formatBlock'],
//                                 ['fontColor'],
//                                 ['list'],
//                                 ['bold', 'underline', 'italic'],
//                                 ['table', 'link', 'image'],
//                                 ['codeView']
//                             ]
//                         }}
//                         onChange={props.onContentEdit}
//                     />

// <div style={{border: '1px lightgray solid', width: '800px'}}>
//                     <CKEditor
//                         onInit={ editor => {
//                             console.log( 'Editor is ready to use!', editor );

//                             // Insert the toolbar before the editable area.
//                             editor.ui.getEditableElement().parentElement.insertBefore(
//                                 editor.ui.view.toolbar.element,
//                                 editor.ui.getEditableElement()
//                             );
//                         } }
//                         // config={ editorConfiguration }
//                         onChange={ ( event, editor ) => console.log( { event, editor } ) }
//                         editor={ DecoupledEditor }
//                         data="<p>Hello from CKEditor 5's DecoupledEditor!</p>"
//                         // config={ /* the editor configuration */ }
//                     />
//                 </div>


//<div style={{border: '1px lightgray solid', width: '800px'}}>
//<CKEditor
//    onInit={ editor => {
//        console.log( 'Editor is ready to use!', editor );
//
//        // Insert the toolbar before the editable area.
//        editor.ui.getEditableElement().parentElement.insertBefore(
//            editor.ui.view.toolbar.element,
//            editor.ui.getEditableElement()
//        );
//    } }
    // config={ editorConfiguration }
//    onChange={ ( event, editor ) => console.log( { event, editor } ) }
//    editor={ DecoupledEditor }
//    data="<p>Hello from CKEditor 5's DecoupledEditor!</p>"
    // config={ /* the editor configuration */ }
///>
//</div>

// <div style={{display:'flex', margin: '20px 0'}}>
// <Editor
//     value={props.content.find( item => item.lang === props.lang).data}
//     init={{
//         height: 500,
//         width: 700,
//         menubar: false,
//         plugins: [
//             'advlist autolink lists link image charmap print preview anchor',
//             'searchreplace visualblocks code fullscreen',
//             'insertdatetime media table paste code help wordcount'
//         ],
//         toolbar:
//             'undo redo | formatselect | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
//         }}
//         onChange={props.handleEditorChange}
// />
// <div style={{ height: '300px', width: '200px', marginLeft: '20px'}}>
//     <div style={{display:'flex'}}>
//         <input
//             onChange={
//                 event =>
//                 props.onLangeChange( event.target.value, 'langInput')
//             }
//         />
//         <button 
//             style={{marginLeft:'20px'}}
//             onClick={() => props.addLang()}
//         >Add</button>
//     </div>
//     <div style={{ height: '438px',width: '200px', margin: '20px 0', overflowX:'hidden', overflowY:'auto', padding:'0 20px', border: '1px gray solid', borderRadius: '8px'}}>
//         {
//             props.langList.map((item, index) => (
//                 <div>
//                     <div
//                         key={index}
//                         className={props.lang == item? "langButton selected":"langButton non-selected"}
//                         onClick={() => props.onLangeChange( item, 'lang' )}
//                     >{item}</div>
//                 </div>
//             ))
//         }
//     </div>
// </div>
// </div>

// <div style={{display:'flex'}}>
//                 <textarea 
//                     style={{width: '700px', height: '300px', margin: '20px 0'}}
//                     value={props.content.find( item => item.lang === props.lang).data}
//                     onChange={ 
//                             event =>
//                             props.onContentChange( event.target.value )
//                         }
//                 />
//                 <div style={{ height: '300px', width: '200px', marginLeft: '20px'}}>
//                     <div style={{display:'flex'}}>
//                         <input
//                             onChange={
//                                 event =>
//                                 props.onLangeChange( event.target.value, 'langInput')
//                             }
//                         />
//                         <button 
//                             style={{marginLeft:'20px'}}
//                             onClick={() => props.addLang()}
//                         >Add</button>
//                     </div>
//                     {
//                         props.langList.map((item, index) => (
//                             <div>
//                                 <button
//                                     key={index}
//                                     style={{margin:'10px 0 0', width: '100px'}}
//                                     onClick={() => props.onLangeChange( item, 'lang' )}
//                                 >{item}</button>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>



// <div style={{display:'flex'}}>
//                     <Editor
//                         value={props.content.find( item => item.lang === props.lang).data}
//                         init={{
//                             height: 500,
//                             width: 700,
//                             menubar: false,
//                             plugins: [
//                                 'advlist autolink lists link image charmap print preview anchor',
//                                 'searchreplace visualblocks code fullscreen',
//                                 'insertdatetime media table paste code help wordcount'
//                             ],
//                             toolbar:
//                                 'undo redo | formatselect | bold italic forecolor | bullist numlist | link | code'
//                             }}
//                             onChange={props.handleEditorChange}
//                     />
                    // <div style={{ height: '300px', width: '200px', marginLeft: '20px'}}>
                    //     <div style={{display:'flex'}}>
                    //         <input
                    //             onChange={
                    //                 event =>
                    //                 props.onLangeChange( event.target.value, 'langInput')
                    //             }
                    //         />
                    //         <button 
                    //             style={{marginLeft:'20px'}}
                    //             onClick={() => props.addLang()}
                    //         >Add</button>
                    //     </div>
                    //     <div style={{ height: '438px',width: '200px', margin: '20px 0', overflowX:'hidden', overflowY:'auto', padding:'0 20px', border: '1px gray solid', borderRadius: '8px'}}>
                    //         {
                    //             props.langList.map((item, index) => (
                    //                 <div>
                    //                     <div
                    //                         key={index}
                    //                         className={props.lang == item? "langButton selected":"langButton non-selected"}
                    //                         onClick={() => props.onLangeChange( item, 'lang' )}
                    //                     >{item}</div>
                    //                 </div>
                    //             ))
                    //         }
                    //     </div>
                    // </div>
//                 </div>




// <GenItem
// title={props.name.name}
// content={props.name.title}
// onchange={props.onchange}
// />
// <div style={{display:'flex', margin: '20px 0'}}>
// <button onClick={() => props.add("normal")}>Add normal</button>
// <div style={{width:'50px'}}/>
// <button onClick={() => props.add("email")}>Add email</button>
// <div style={{width:'50px'}}/>
// <button onClick={() => props.add("link")}>Add link</button>
// <div style={{width:'50px'}}/>
// <button onClick={() => props.reduce()}>Red</button>
// <div style={{width:'50px'}}/>
// <button onClick={() => props.print()}>print</button>
// </div>
// <div>contact:</div>
// {
// props.sign.map((item,index) => (
    
//     <GenItem
//         {...item}
//         index={index}
//         key={index}
//         onchange={props.onchange}
//     ></GenItem>
// ))
// }
// <div>At least 6 rows</div>