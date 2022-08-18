import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase64 from "react-file-base64";

import "./styles.css";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({currentID, setCurrentID}) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFiles: "",
  });

  const post = useSelector((state) => currentID ? state.posts.find((p) => p._id === currentID) : null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentID){
      dispatch(updatePost(currentID, postData));
    }else{
      dispatch(createPost(postData));
    }
    clear();
  };

  useEffect(() => {
    if(post){
      setPostData(post);
    }
  }, [post])

  const clear = () => {
    setCurrentID(null);
    setPostData({ creator: "", title: "", message: "", tags: "", selectedFiles: "" });
  };

  return (
    <div className="container paper">
      <form
        action=""
        autoComplete="off"
        noValidate
        className="form"
        onSubmit={handleSubmit}
      >
        <h2 className="memtitle">{currentID ? 'Editing' : 'Creating'} a memory</h2>
        <input
          placeholder="Creator"
          type="text"
          name="creator"
          id="creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          placeholder="Title"
          type="text"
          name="title"
          id="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Message"
          name="message"
          id="message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Tags"
          name="tags"
          id="tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div className="fileinput">
          <FileBase64
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFiles: base64 })
            }
          />
        </div>
        <button type="submit" id="submitBtn" className="btn">
          Submit
        </button>
        <button onClick={clear} id="clearBtn" className="btn">
          Clear
        </button>
      </form>
    </div>
  );
};

export default Form;