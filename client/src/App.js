import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
// import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import {getPosts} from './actions/posts'

import './styles.css';

import memories from "./images/memories.png";

const App = () => {
  const [currentID, setCurrentID] = useState(null)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <div className="container">
      <div className="AppBar">
        <div className="typography">Memories</div>
        <img src={memories} alt="memories" />
      </div>
      <div className="grow">
        <div className="container">
          <div className="grid">
            <div className="grid item1">
              <Posts setCurrentID={setCurrentID} />
            </div>
            <div className="grid item2">
              <Form currentID={currentID} setCurrentID={setCurrentID} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
