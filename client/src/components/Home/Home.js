import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import {getPosts} from '../../actions/posts';

import './styles.css';

const Home = () => {
  const [currentID, setCurrentID] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentID, dispatch]);

  return (
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
  );
};

export default Home;
