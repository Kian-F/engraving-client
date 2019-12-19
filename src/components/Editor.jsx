import React from "react";
import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import Display from './Display';



/*
 * Custom toolbar component including the custom heart button and dropdowns
 */
// const CustomToolbar = () => (
//   <div id="toolbar">
//     <select className="ql-font">
//       <option value="arial" selected>
//         Arial
//       </option>
//       <option value="comic-sans">Comic Sans</option>
//       <option value="courier-new">Courier New</option>
//       <option value="georgia">Georgia</option>
//       <option value="helvetica">Helvetica</option>
//       <option value="lucida">Lucida</option>
//     </select>
//     <select className="ql-size"
//             onChange={this.handleSizeUpdate}
//     >
      
//       <option value="extra-small">Size 1</option>
//       <option value="small">Size 2</option>
//       <option value="medium" selected>
//         Size 3
//       </option>
//       <option value="large">Size 4</option>
//     </select>
//     <select className="ql-align" />
//     <select className="ql-color" />
//     <select className="ql-background" />
//     <button className="ql-clean" />
//     <button className="ql-insertHeart">
//       <CustomHeart />
//     </button>
//   </div>
// );


/*
 * Editor component with custom toolbar and content containers
 */
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    { editorHtml: "",
      selectSize: "small"
    };

  }
  

  handleChange = e => { 
    const text= this.html2text(e)
    this.setState({ editorHtml: text});
    //console.log(text);
    this.props.onTextSubmit(text);
   
    
  }

   //convert html to plain text
   html2text = (html) =>   {
    const d = document.createElement( 'div' );
    d.innerHTML = html;
    return d.textContent;
  }



//  handleSubmit = html =>{
//    html.preventDefault();
//    const post ={
//      body: this.state.body
//    }
//  }

  // updateFont = (event) => {
    
    
  //   // this.props.onFontChange(val);
  // }

  handleSizeUpdate = (event) =>  {
  
    this.setState({selectSize: event.target.value});
    this.props.onSizeChange(event.target.value);
    
    console.log(event.target.value)
    
    
  }
 
  static modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        // insertHeart: insertHeart
      }
    }
  };

  static formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
  ];

  render() {

  // const CustomHeart = () => <span>♥</span>;

  // function insertHeart() {
  //   const cursorPosition = this.quill.getSelection().index;
  //   this.quill.insertText(cursorPosition, "♥");
  //   this.quill.setSelection(cursorPosition + 1);
  // }
    const CustomToolbar = () => (
      <div id="toolbar">
        <select className="ql-font">
          <option value="arial" selected>
            Arial
          </option>
          <option value="comic-sans">Comic Sans</option>
          <option value="courier-new">Courier New</option>
          <option value="georgia">Georgia</option>
          <option value="helvetica">Helvetica</option>
          <option value="lucida">Lucida</option>
        </select>
        <select className="ql-size"
                onChange={this.handleSizeUpdate}
                value={this.state.selectSize}
        >
          
          <option value="extra-small">Size 1</option>
          <option value="small">Size 2</option>
          <option value="medium" >
            Size 3
          </option>
          <option value="large">Size 4</option>
        </select>
        <select className="ql-align" />
        <select className="ql-color" />
        <select className="ql-background" />
        <button className="ql-clean" />
       
        
      </div>
    );

      // Add sizes to whitelist and register them
  const Size = Quill.import("formats/size");
  Size.whitelist = ["extra-small", "small", "medium", "large"];
  Quill.register(Size, true);

  // Add fonts to whitelist and register them
  const Font = Quill.import("formats/font");
  Font.whitelist = [
    "arial",
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida"
  ];
  Quill.register(Font, true);

  
    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          // value={this.state.editorHtml}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules={Editor.modules}
          formats={Editor.formats}
        />
    
         {/* {<input type="text"  value={this.state.editorHtml}/> } */}
      </div>
    );
  }
}
export default Editor;