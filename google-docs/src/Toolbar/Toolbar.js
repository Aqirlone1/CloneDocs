import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";
import './Toolbar.css'

const Toolbar = props => {
  const [content, setContent] = useState('');
  const [format, setFormat] = useState('');
  const [testArea, setTextArea] = useState(false)

  const handleButtonClick = (format) => {
    setFormat(format)
  };

  const handleNewFile = () =>{
    setTextArea(true)
    props.onSelect(false)
  }

  return (
    <>
     {!testArea && (
      <div className="newfile" onClick={handleNewFile}>
      <img className="googleplusicon" src='https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png'
      alt='open new file'/>
    </div>
    )}
  
   {testArea && ( 
    <>
    <div className="toolbar text-center">
      <button onClick={() => handleButtonClick("bold")}>
        <FontAwesomeIcon icon={faBold} />
      </button>
      <button onClick={() => handleButtonClick("italic")}>
        <FontAwesomeIcon icon={faItalic} />
      </button>
      <button onClick={() => handleButtonClick("underline")}>
        <FontAwesomeIcon icon={faUnderline} />
      </button>
      <button onClick={() => handleButtonClick("strikethrough")}>
        <FontAwesomeIcon icon={faStrikethrough} />
      </button>
      <button onClick={() => handleButtonClick("align-left")}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </button>
      <button onClick={() => handleButtonClick("align-center")}>
        <FontAwesomeIcon icon={faAlignCenter} />
      </button>
      <button onClick={() => handleButtonClick("align-right")}>
        <FontAwesomeIcon icon={faAlignRight} />
      </button>
    </div>
   <textarea
        className="textarea"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ fontWeight: format === 'bold' ? 'bold' : 'normal', fontStyle: format === 'italic' ? 'italic' : 'normal', textDecoration: format === 'underline' ? 'underline' : 'none', textAlign: format.includes('align-') ? format.replace('align-', '') : 'left' }}
      />
      </>
      )}
    </>
  );
};

export default Toolbar;
