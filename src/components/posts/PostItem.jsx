import MyButton from '../UI/button/MyButton';
import styles from './postItem.module.css';

const PostItem = ({ post, index, handleDelete }) => {
  const { title, body } = post;
  return (
    <article className={styles.article}>
      <div>
        <strong>
          {index}. {title}
        </strong>
        <p>{body}</p>
      </div>
      <MyButton onClick={() => handleDelete(post.id)}>Delete</MyButton>
    </article>
  );
};
export default PostItem;
