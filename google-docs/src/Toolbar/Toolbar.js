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
import "bootstrap/dist/css/bootstrap.min.css";



const Toolbar = props => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [format, setFormat] = useState('');
  const [testArea, setTextArea] = useState(false)

  const handleButtonClick = (format) => {
    setFormat(format)
  };

  const handleTitleClick = (event) =>{
    setTitle(event.target.value)
    console.log(event.target.value)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        url: 'https://example.com',
        title: title
      })
        .then(() => console.log('Shared successfully.'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported.');
    }
  };

  const handleNewFile = () =>{
    setTextArea(true)
    props.onSelect(false)
  }

  return (
    <>
     {!testArea && (
      <div className="newfile" onClick={handleNewFile}>
      <img className="googleplusicon"
      src='https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png'
      alt='open new file'/>
    </div>
    )}
  
   {testArea && ( 
    <>
    <nav className="navbar">
    <div className="container-fluid">
      <a>
        <img
          className="mainLogo"
          src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
          alt="docsLogo"
        />
      </a>
      <div>
        <input onChange={handleTitleClick} className="inputbox" type="text" placeholder="Untitled Document" aria-label="Untitled Document"></input>
      <nav className="navigationBar">
        <div>
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
          <button>Insert</button>
          <button>Format</button>
          <button>Tools</button>
          <button>Extensions</button>
          <button>Help</button>
        </div>
      </nav>
      </div>
      <div>
      </div>
      <div className="form-inline ml-auto"></div>
      <button onClick={handleShare} type="button" class="btn btn-outline-primary">Share</button>
    </div>
  </nav>
    <div className="toolbar">
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
