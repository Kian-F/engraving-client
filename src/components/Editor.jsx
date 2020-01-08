import React from "react";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Display from './Display';
import "../index.css"



class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorHtml: '' }
    
  }
  
  handleChange = e => {
    const text = this.html2text(e)
    this.setState({ editorHtml: text });
    this.props.onTextSubmit(text);
  }

     //convert html to plain text
     html2text = (html) =>   {
      const d = document.createElement( 'div' );
      d.innerHTML = html;
      return d.textContent;
    }
  
  
  render () {
    return (
      <div>
        <ReactQuill 
          onChange={this.handleChange}
          //value={this.state.editorHtml}
          modules={Editor.modules}
          formats={Editor.formats}
          placeholder={this.props.placeholder}
         />
       </div>
     )
  }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

/* 
 * PropType validation
 */
// Editor.propTypes = {
//   placeholder: PropTypes.string,
// }

export default Editor;  