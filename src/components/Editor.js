import React, {useEffect} from 'react'; 
import Codemirror from "codemirror-5.65.11";
import 'codemirror-5.65.11/lib/codemirror.css'; 
import 'codemirror-5.65.11/theme/dracula.css';
import 'codemirror-5.65.11/mode/python/python'; 
import 'codemirror-5.65.11/addon/edit/closetag';  
import 'codemirror-5.65.11/addon/edit/closebrackets'; 

const Editor = () => {
        useEffect(() => {
            async function init() {
                Codemirror.fromTextArea(document.getElementById('realtimeEditor'),{
                    mode: {name:'python'},
                    theme: 'dracula',
                    autoCloseTags: true,
                    autoCloseBrackets: true, 
                    lineNumbers:true,
                });
            }
            init(); 
        },[]);
    return <textarea id="realtimeEditor"></textarea>;
};

export default Editor;