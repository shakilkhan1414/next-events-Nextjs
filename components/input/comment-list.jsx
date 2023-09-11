import classes from './comment-list.module.css';

function CommentList({items}) {
  return (
    <ul className={classes.comments}>
      {items?.map(item=>(
        <li key={item._id}>
        <p>{item.text}</p>
        <div>
          By <span>{item.name}</span>
        </div>
      </li>
      ))}
      
    </ul>
  );
}

export default CommentList;
