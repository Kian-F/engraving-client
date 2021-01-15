import React from "react";
import { render } from "react-dom";
import Display from "./Display";
import "../index.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorComponent from "react-froala-wysiwyg";
import FroalaEditor from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import "froala-editor/js/plugins.pkgd.min.js";

class Editor extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = { editorHtml: "", content: "", comments: "" };
  }

  // handleChange = (e) => {
  //   const text = this.html2text(e)
  //   this.setState({ editorHtml: text });
  //   this.props.onTextSubmit(text);
  //   console.log(e);
  // }

  //  //convert html to plain text
  //  html2text = (html) =>   {
  //   const d = document.createElement( 'div' );
  //   d.innerHTML = html;
  //   return d.textContent;
  // }
  // onChange(content, delta, source, editor,comments) {
  //   const text = editor.getText(content);
  //   this.setState ({ content: text });
  //   console.log(text);
  //   console.log(editor.getContents())
  //   const con = editor.getContents();
  //   //const test = editor.setContents(delta);
  //   //this.setState({comments: con})
  //   // console.log(editor.getFormat());
  // }
  // onChange(html) {
  //   this.setState ({ content: html });
  //     console.log(html)
  //   }
  // on= ('text-change', function(delta, oldDelta, source) {
  //   if (source == 'api') {
  //     console.log(delta);
  //   // } else if (source == 'user') {
  //   //   console.log("A user action triggered this change.");
  //   //}
  // }});

  // set the text and pass it to handleTextInput in Display
  handleModelChange = (text) => {
    this.setState({ content: text });
    this.props.onTextSubmit(text);
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <FroalaEditor
          tag="textarea"
          config={this.config}
          model={this.state.model}
          onModelChange={this.handleModelChange}
        />
      </div>
    );
  }
}

export default Editor;
