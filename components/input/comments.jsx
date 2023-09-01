'use client'
import { useState,useEffect,useContext } from 'react';
import NotificationContext from '@/store/Notification-context';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;
  const notificationCtx = useContext(NotificationContext);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    if(showComments){
      if(!comments){
        setLoading(true)
      }
      fetch(`/api/comments/${eventId}`)
      .then(res=>res.json())
      .then(data=> setComments(data.comments))
      .then(()=>setLoading(false))
    }
    
  },[showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {

    notificationCtx.showNotification({
      title: 'Sending comment ...',
      message: 'Your comment is sending.',
      status: 'pending'
    })
   
    fetch(`/api/comments/${eventId}`,{
      method: 'POST',
      body: JSON.stringify(commentData),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      notificationCtx.showNotification({
        title: 'Success!',
        message: 'Your comment was saved.',
        status: 'success'
      })
    })
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {loading && <p>Loading comments ...</p>}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
