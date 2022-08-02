import React, { useState } from "react";
import FileBase from 'react-file-base64';

import './styles.css';

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFiles: "",
  });

  const handleSubmit = () => {};
  const clear = () => {};

  return (
    <div className="container paper">
      <form
        action=""
        autoComplete="off"
        noValidate
        className="form"
        onSubmit={handleSubmit}
      >
        <h2 className="memtitle">Creating a memory</h2>
        <input
          type="text"
          name="creator"
          id="creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          type="text"
          name="title"
          id="title"
          value={postData.title}
          onChange={(e) =>
            setPostData({ ...postData, title: e.target.value })
          }
        />
        <input
          type="text"
          name="message"
          id="message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          type="text"
          name="tags"
          id="tags"
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value })
          }
        />
        <div className="fileinput">
            <FileBase
                type= "file"
                multiple= {false}
                onDone = {({base64}) => setPostData({ ...postData, selectedFiles : base64})}
            />
        </div>
        <button type="submit" id="submitBtn" className="btn">Submit</button>
        <button onClick={clear} id="clearBtn" className="btn">Clear</button>
      </form>
    </div>
  );
};  

export default Form;
