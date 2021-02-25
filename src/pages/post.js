import React, { useState, } from "react";
import { getFirebase } from "../firebase";
import { Redirect, useHistory } from "react-router-dom";

const Post = ({ match }) => {
  const slug = match.params.slug;
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState(); 
  const history = useHistory();
  
  


  if (loading && !currentPost) {
    getFirebase().database().ref().child(`/posts/${slug}`).once("value").then(snapshot => {
      
        if (snapshot.val()) {
          setCurrentPost(snapshot.val());
        }
        setLoading(false);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }


  const postDoesNotExist = !currentPost;
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  const handleSubmit = () => {
    getFirebase().database().ref(`/posts/${slug}`).remove().then(() => {history.push('/')  })
    }

  return (
    <>
    <img src={currentPost.coverImage} alt={currentPost.coverImageAlt}></img>
      <h1>{currentPost.title}</h1>
      <em>{currentPost.datePretty}</em>
      <p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
      <button onClick={handleSubmit}>DELETE</button>
  </>
  );
}
export default Post;
