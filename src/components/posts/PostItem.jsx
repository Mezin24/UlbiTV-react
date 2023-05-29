import { useNavigate } from 'react-router-dom';
import MyButton from '../UI/button/MyButton';
import styles from './postItem.module.css';

const PostItem = ({ post, index, handleDelete }) => {
  const { title, body } = post;
  const navigate = useNavigate();
  return (
    <article className={styles.article}>
      <div>
        <strong>
          {index}. {title}
        </strong>
        <p>{body}</p>
      </div>
      <div style={{ display: 'flex', gap: '5px' }}>
        <MyButton
          onClick={() => {
            navigate(`/posts/${post.id}`);
          }}
        >
          Comments
        </MyButton>
        <MyButton onClick={() => handleDelete(post.id)}>Delete</MyButton>
      </div>
    </article>
  );
};
export default PostItem;
